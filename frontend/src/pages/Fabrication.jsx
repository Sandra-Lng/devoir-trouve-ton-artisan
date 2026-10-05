import { useEffect, useState } from 'react'
import CarteArtisan from '../components/CarteArtisan.jsx'
import { recupererArtisans } from '../services/api'
import Seo from '../components/Seo'

function Fabrication() {
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
                    setErreur('Impossible de charger les artisans.')
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

    const artisansFabrication = artisans.filter(
        (artisan) => artisan.categorie === 'Fabrication'
    )

    return (
        <main className="container contenu-principal">
            <Seo
                titre="Artisans de la fabrication | Trouve ton artisan"
                description="Découvrez les bijoutiers, couturiers et ferronniers en Auvergne-Rhône-Alpes et contactez un artisan."
            />
            <h1>Les artisans de la fabrication</h1>

            {chargement && <p role="status">Chargement des artisans…</p>}
            {erreur && <p role="alert">{erreur}</p>}

            {!chargement && !erreur && (
                <div className="row">
                    {artisansFabrication.map((artisan) => (
                        <div className="col-12 col-md-6" key={artisan.slug}>
                            <CarteArtisan
                                niveauTitre="h2"
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
            )}
        </main>
    )
}

export default Fabrication