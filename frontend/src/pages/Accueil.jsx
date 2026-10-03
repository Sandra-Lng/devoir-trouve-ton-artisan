import batiment from '../assets/icons/batiment.svg'
import services from '../assets/icons/services.svg'
import fabrication from '../assets/icons/fabrication.svg'
import alimentation from '../assets/icons/alimentation.svg'
import { Link } from 'react-router'
import CarteArtisan from '../components/CarteArtisan.jsx'
import { useEffect, useState } from 'react'
import { recupererArtisans } from '../services/api'
import Seo from '../components/Seo'

function Accueil() {
    const [artisans, setArtisans] = useState([])
    const [chargement, setChargement] = useState(true)
    const [erreur, setErreur] = useState('')

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
                    setErreur('Impossible de charger les artisans du mois.')
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
    const artisansDuMois = artisans.filter((artisan) => artisan.top === true)
    return (
        <>
            <Seo
                titre="Trouvez votre artisan en Auvergne-Rhône-Alpes"
                description="Découvrez les artisans d’Auvergne-Rhône-Alpes et contactez un professionnel du bâtiment, de l’alimentation, de la fabrication ou des services."
            />
            <main className="container contenu-principal">
                <h1>Trouvez votre artisan</h1>
                <p>Découvrez les artisans de la région Auvergne-Rhône-Alpes.</p>
                <div className="row g-3 mt-3">
                    <div className="col-6 col-lg-3">
                        <Link
                            to="/batiment"
                            className="btn btn-outline-primary w-100 bouton-categorie"
                        >
                            <img src={batiment} alt="" width="28" height="28" />
                            Bâtiment
                        </Link>
                    </div>

                    <div className="col-6 col-lg-3">
                        <Link
                            to="/services"
                            className="btn btn-outline-primary w-100 bouton-categorie"
                        >
                            <img src={services} alt="" width="28" height="28" />
                            Services
                        </Link>
                    </div>

                    <div className="col-6 col-lg-3">
                        <Link
                            to="/fabrication"
                            className="btn btn-outline-primary w-100 bouton-categorie"
                        >
                            <img src={fabrication} alt="" width="28" height="28" />
                            Fabrication
                        </Link>
                    </div>

                    <div className="col-6 col-lg-3">
                        <Link
                            to="/alimentation"
                            className="btn btn-outline-primary w-100 bouton-categorie"
                        >
                            <img src={alimentation} alt="" width="28" height="28" />
                            Alimentation
                        </Link>
                    </div>
                </div>
                <section className="mt-5">
                    <h2>Comment trouver mon artisan ?</h2>

                    <ol className="etapes">
                        <li>Choisir la catégorie d’artisanat dans le menu.</li>
                        <li>Choisir un artisan.</li>
                        <li>Le contacter via le formulaire de contact.</li>
                        <li>Une réponse sera apportée sous 48h.</li>
                    </ol>
                </section>
                <section className="mt-5">
                    <h2>Artisans du mois</h2>
                    {chargement && <p role="status">Chargement des artisans…</p>}
                    {erreur && <p role="alert">{erreur}</p>}

                    <div className="row">
                        {artisansDuMois.map((artisan) => (
                            <div className="col-12 col-md-6 col-lg-4" key={artisan.slug}>
                                <CarteArtisan
                                    nom={artisan.nom}
                                    note={artisan.note}
                                    specialite={artisan.specialite}
                                    ville={artisan.ville}
                                    icone={artisan.icone}
                                    lien={`/artisan/${artisan.slug}`}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Accueil