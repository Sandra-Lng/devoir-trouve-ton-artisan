import { useParams } from 'react-router'
import artisans from '../data/artisans'
import localisation from '../assets/icons/localisation.svg'
import NoteArtisan from '../components/NoteArtisan'
import Page404 from './Page404'

function FicheArtisan() {
    const { slug } = useParams()
    const artisan = artisans.find((artisan) => artisan.slug === slug)

    if (!artisan) {
        return <Page404 />
    }

    return (
        <main className="container contenu-principal">
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
                        onSubmit={(event) => event.preventDefault()}
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
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Envoyer
                        </button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default FicheArtisan