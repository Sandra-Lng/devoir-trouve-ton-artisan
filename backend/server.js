const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const { Categorie, Specialite, Artisan } = require('./models')

const app = express()
const port = Number(process.env.PORT) || 3000

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

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

async function demarrer() {
    try {
        await sequelize.authenticate()

        app.listen(port, () => {
            console.log(`Serveur démarré sur http://localhost:${port}`)
        })
    } catch (erreur) {
        console.error('Impossible de se connecter à MySQL')
        process.exitCode = 1
    }
}

demarrer()