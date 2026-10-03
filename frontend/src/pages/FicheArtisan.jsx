import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { recupererArtisans, envoyerContact } from '../services/api'
import localisation from '../assets/icons/localisation.svg'
import NoteArtisan from '../components/NoteArtisan'
import Page404 from './Page404'
import Seo from '../components/Seo'

function FicheArtisan() {
    const { slug } = useParams()
    const [artisans, setArtisans] = useState([])
    const [chargement, setChargement] = useState(true)
    const [erreur, setErreur] = useState('')
    const [envoiEnCours, setEnvoiEnCours] = useState(false)
    const [succesContact, setSuccesContact] = useState('')
    const [erreurContact, setErreurContact] = useState('')

    useEffect(() => {
        let actif = true

        async function chargerArtisans() {
            try {
                const donnees = await recupererArtisans()

                if (actif) {
                    setArtisans(donnees)
                }
            } catch {
                if (actif) {
                    setErreur('Impossible de charger la fiche artisan.')
                }
            } finally {
                if (actif) {
                    setChargement(false)
                }
            }
        }

        chargerArtisans()

        return () => {
            actif = false
        }
    }, [])

    const artisan = artisans.find((artisan) => artisan.slug === slug)

    async function gererEnvoi(event) {
        event.preventDefault()

        if (envoiEnCours) return

        const formulaire = event.currentTarget
        const champs = new FormData(formulaire)

        setEnvoiEnCours(true)
        setSuccesContact('')
        setErreurContact('')

        try {
            const resultat = await envoyerContact(slug, {
                nom: champs.get('nom'),
                email: champs.get('email'),
                objet: champs.get('objet'),
                message: champs.get('message'),
            })

            setSuccesContact(resultat.message)
            formulaire.reset()
        } catch (erreur) {
            setErreurContact(
                erreur instanceof TypeError
                    ? 'Impossible de joindre le serveur. Réessayez plus tard.'
                    : erreur.message || 'Impossible d’envoyer le message.'
            )
        } finally {
            setEnvoiEnCours(false)
        }
    }

    if (chargement) {
        return (
            <main className="container contenu-principal">
                <p role="status">Chargement de la fiche…</p>
            </main>
        )
    }

    if (erreur) {
        return (
            <main className="container contenu-principal">
                <p role="alert">{erreur}</p>
            </main>
        )
    }

    if (!artisan) {
        return <Page404 />
    }

    return (
        <main className="container contenu-principal">
            <Seo
                titre={`${artisan.nom} | Trouve ton artisan`}
                description={`Découvrez ${artisan.nom}, ${artisan.specialite} à ${artisan.ville}, et contactez cet artisan via le formulaire.`}
            />
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h1>{artisan.nom}</h1>
                    <p>{artisan.specialite}</p>
                    <NoteArtisan note={artisan.note} />

                    <p className="ville-artisan">
                        <img src={localisation} alt="" width="16" height="16" />
                        {artisan.ville}
                    </p>
                </div>

                <img src={artisan.icone} alt="" width="64" height="64" />
            </div>

            <div className="row g-4 mt-5">
                <section className="col-12 col-lg-6">
                    <h2>À propos</h2>
                    <p>{artisan.apropos}</p>
                    {artisan.siteWeb && (
                        <a href={artisan.siteWeb}>
                            Visiter le site web de {artisan.nom}
                        </a>
                    )}
                </section>

                <section className="col-12 col-lg-6">
                    <h2>Contacter cet artisan</h2>

                    <form
                        className="formulaire-contact"
                        onSubmit={gererEnvoi}
                    >
                        <div className="mb-4">
                            <label htmlFor="contact-nom" className="form-label">
                                Nom
                            </label>
                            <input
                                id="contact-nom"
                                name="nom"
                                type="text"
                                className="form-control"
                                autoComplete="name"
                                maxLength={100}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="contact-email" className="form-label">
                                Email
                            </label>
                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                className="form-control"
                                autoComplete="email"
                                maxLength={254}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="contact-objet" className="form-label">
                                Objet
                            </label>
                            <input
                                id="contact-objet"
                                name="objet"
                                type="text"
                                className="form-control"
                                maxLength={150}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="contact-message" className="form-label">
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                className="form-control"
                                rows="6"
                                maxLength={5000}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            disabled={envoiEnCours}
                        >
                            {envoiEnCours ? 'Envoi en cours…' : 'Envoyer'}
                        </button>
                        {succesContact && (
                            <p className="mt-3" role="status">
                                {succesContact}
                            </p>
                        )}

                        {erreurContact && (
                            <p className="mt-3" role="alert">
                                {erreurContact}
                            </p>
                        )}
                    </form>
                </section>
            </div>
        </main>
    )
}

export default FicheArtisan