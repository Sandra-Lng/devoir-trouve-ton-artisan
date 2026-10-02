import batiment from '../assets/icons/batiment.svg'
import services from '../assets/icons/services.svg'
import fabrication from '../assets/icons/fabrication.svg'
import alimentation from '../assets/icons/alimentation.svg'
import pain from '../assets/icons/pain.svg'
import chocolat from '../assets/icons/chocolat.svg'
import chauffage from '../assets/icons/chauffage.svg'
import { Link } from 'react-router'
import CarteArtisan from '../components/CarteArtisan.jsx'

function Accueil() {
    return (
        <>
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
                        <a
                            href="/categorie/alimentation"
                            className="btn btn-outline-primary w-100 bouton-categorie"
                        >
                            <img src={alimentation} alt="" width="28" height="28" />
                            Alimentation
                        </a>
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

                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <CarteArtisan
                                nom="Au pain chaud"
                                note={4.8}
                                specialite="Boulanger"
                                ville="Montélimar"
                                icone={pain}
                                lien="/artisan/au-pain-chaud"
                            />
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <CarteArtisan
                                nom="Chocolaterie Labbé"
                                note={4.9}
                                specialite="Chocolatier"
                                ville="Lyon"
                                icone={chocolat}
                                lien="/artisan/chocolaterie-labbe"
                            />
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <CarteArtisan
                                nom="Orville Salmons"
                                note={5}
                                specialite="Chauffagiste"
                                ville="Evian"
                                icone={chauffage}
                                lien="/artisan/orville-salmons"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Accueil