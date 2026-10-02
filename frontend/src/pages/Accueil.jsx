import batiment from '../assets/icons/batiment.svg'
import services from '../assets/icons/services.svg'
import fabrication from '../assets/icons/fabrication.svg'
import alimentation from '../assets/icons/alimentation.svg'
import pain from '../assets/icons/pain.svg'
import chocolat from '../assets/icons/chocolat.svg'
import chauffage from '../assets/icons/chauffage.svg'
import localisation from '../assets/icons/localisation.svg'
import chevron from '../assets/icons/chevron.svg'
import etoile from '../assets/icons/etoile.svg'

function Accueil() {
    return (
        <>
            <main className="container contenu-principal">
                <h1>Trouvez votre artisan</h1>
                <p>Découvrez les artisans de la région Auvergne-Rhône-Alpes.</p>
                <div className="row g-3 mt-3">
                    <div className="col-6 col-lg-3">
                        <a
                            href="/categorie/batiment"
                            className="btn btn-outline-primary w-100 bouton-categorie"
                        >
                            <img src={batiment} alt="" width="28" height="28" />
                            Bâtiment
                        </a>
                    </div>

                    <div className="col-6 col-lg-3">
                        <a
                            href="/categorie/services"
                            className="btn btn-outline-primary w-100 bouton-categorie"
                        >
                            <img src={services} alt="" width="28" height="28" />
                            Services
                        </a>
                    </div>

                    <div className="col-6 col-lg-3">
                        <a
                            href="/categorie/fabrication"
                            className="btn btn-outline-primary w-100 bouton-categorie"
                        >
                            <img src={fabrication} alt="" width="28" height="28" />
                            Fabrication
                        </a>
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
                            <article className="carte-artisan">
                                <img src={pain} alt="" width="40" height="40" />

                                <div>
                                    <h3>
                                        <a href="/artisan/au-pain-chaud">Au pain chaud</a>
                                    </h3>
                                    <div className="note-artisan">
                                        <span className="etoiles-artisan" aria-hidden="true">
                                            <img src={etoile} alt="" width="16" height="16" />
                                            <img src={etoile} alt="" width="16" height="16" />
                                            <img src={etoile} alt="" width="16" height="16" />
                                            <img src={etoile} alt="" width="16" height="16" />
                                            <img src={etoile} alt="" width="16" height="16" />
                                        </span>
                                        <span>4,8 / 5</span>
                                    </div>
                                    <p>Boulanger</p>
                                    <p className="ville-artisan">
                                        <img src={localisation} alt="" width="16" height="16" />
                                        Montélimar
                                    </p>
                                </div>
                                <img
                                    src={chevron}
                                    alt=""
                                    width="20"
                                    height="20"
                                    className="chevron-artisan"
                                />
                            </article>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <article className="carte-artisan">
                                <img src={chocolat} alt="" width="40" height="40" />

                                <div>
                                    <h3>
                                        <a href="/artisan/chocolaterie-labbe">Chocolaterie Labbé</a>
                                    </h3>
                                    <div className="note-artisan">
                                        <span className="etoiles-artisan" aria-hidden="true">
                                            <img src={etoile} alt="" width="16" height="16" />
                                            <img src={etoile} alt="" width="16" height="16" />
                                            <img src={etoile} alt="" width="16" height="16" />
                                            <img src={etoile} alt="" width="16" height="16" />
                                            <img src={etoile} alt="" width="16" height="16" />
                                        </span>
                                        <span>4,9 / 5</span>
                                    </div>
                                    <p>Chocolatier</p>
                                    <p className="ville-artisan">
                                        <img src={localisation} alt="" width="16" height="16" />
                                        Lyon
                                    </p>
                                </div>
                                <img
                                    src={chevron}
                                    alt=""
                                    width="20"
                                    height="20"
                                    className="chevron-artisan"
                                />
                            </article>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <article className="carte-artisan">
                                <img src={chauffage} alt="" width="40" height="40" />

                                <div>
                                    <h3>
                                        <a href="/artisan/orville-salmons">Orville Salmons</a>
                                    </h3>
                                    <div className="note-artisan">
                                        <span className="etoiles-artisan" aria-hidden="true">
                                            <img src={etoile} alt="" width="16" height="16" />
                                            <img src={etoile} alt="" width="16" height="16" />
                                            <img src={etoile} alt="" width="16" height="16" />
                                            <img src={etoile} alt="" width="16" height="16" />
                                            <img src={etoile} alt="" width="16" height="16" />
                                        </span>
                                        <span>5 / 5</span>
                                    </div>
                                    <p>Chauffagiste</p>
                                    <p className="ville-artisan">
                                        <img src={localisation} alt="" width="16" height="16" />
                                        Evian
                                    </p>
                                </div>
                                <img
                                    src={chevron}
                                    alt=""
                                    width="20"
                                    height="20"
                                    className="chevron-artisan"
                                />
                            </article>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Accueil