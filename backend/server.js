const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const { Categorie, Specialite, Artisan } = require('./models')
const transporteur = require('./mail')
const { rateLimit } = require('express-rate-limit')
const validator = require('validator')

const app = express()
app.set('trust proxy', 'loopback')
const port = Number(process.env.PORT) || 3000

app.use(
    cors({
        origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    })
)
app.use(express.json())

const limiteContact = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    message: {
        message: 'Trop de tentatives. Réessayez dans 15 minutes.',
    },
})

app.get('/api', (req, res) => {
    res.json({ message: 'API Trouve ton artisan' })
})

app.get('/api/categories', async (req, res) => {
    try {
        const categories = await Categorie.findAll({
            order: [['id', 'ASC']],
        })

        res.json(categories)
    } catch (erreur) {
        res.status(500).json({
            message: 'Impossible de récupérer les catégories',
        })
    }
})

app.get('/api/artisans', async (req, res) => {
    try {
        const artisans = await Artisan.findAll({
            attributes: { exclude: ['email'] },
            include: [
                {
                    model: Specialite,
                    as: 'specialite',
                    include: [
                        {
                            model: Categorie,
                            as: 'categorie',
                        },
                    ],
                },
            ],
            order: [['id', 'ASC']],
        })

        res.json(artisans)
    } catch (erreur) {
        res.status(500).json({
            message: 'Impossible de récupérer les artisans',
        })
    }
})

app.post('/api/artisans/:slug/contact', limiteContact, async (req, res) => {
    const { nom, email, objet, message } = req.body || {}

    if (
        typeof nom !== 'string' ||
        typeof email !== 'string' ||
        typeof objet !== 'string' ||
        typeof message !== 'string'
    ) {
        return res.status(400).json({
            message: 'Veuillez remplir tous les champs.',
        })
    }

    const nomContact = nom.trim()
    const emailContact = email.trim()
    const objetContact = objet.trim()
    const messageContact = message.trim()

    if (
        !nomContact ||
        nomContact.length > 100 ||
        emailContact.length > 254 ||
        !validator.isEmail(emailContact) ||
        !objetContact ||
        objetContact.length > 150 ||
        !messageContact ||
        messageContact.length > 5000 ||
        /[\r\n]/.test(nomContact + emailContact + objetContact)
    ) {
        return res.status(400).json({
            message: 'Veuillez vérifier les champs du formulaire.',
        })
    }

    try {
        const artisan = await Artisan.findOne({
            where: { slug: req.params.slug },
        })

        if (!artisan) {
            return res.status(404).json({
                message: 'Artisan introuvable.',
            })
        }

        await transporteur.sendMail({
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TEST_TO || artisan.email,
            replyTo: emailContact,
            subject: `Trouve ton artisan : ${objetContact}`,
            text: [
                `Message destiné à ${artisan.nom}`,
                `Nom : ${nomContact}`,
                `Email : ${emailContact}`,
                '',
                messageContact,
            ].join('\n'),
        })

        return res.json({
            message: 'Votre message a été envoyé.',
        })
    } catch (erreur) {
        console.error('Échec du contact artisan :', erreur.code || erreur.name)

        return res.status(500).json({
            message: 'Impossible d’envoyer le message. Réessayez plus tard.',
        })
    }
})

async function demarrer() {
    try {
        await sequelize.authenticate()

        app.listen(port, '127.0.0.1', () => {
            console.log(`Serveur démarré sur http://localhost:${port}`)
        })
    } catch (erreur) {
        console.error('Impossible de se connecter à MySQL')
        process.exitCode = 1
    }
}

demarrer()