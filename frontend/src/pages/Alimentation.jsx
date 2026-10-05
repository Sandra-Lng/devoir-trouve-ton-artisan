import { useEffect, useState } from 'react'
import CarteArtisan from '../components/CarteArtisan.jsx'
import { recupererArtisans } from '../services/api'
import Seo from '../components/Seo'

function Alimentation() {
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

    const artisansAlimentation = artisans.filter(
        (artisan) => artisan.categorie === 'Alimentation'
    )

    return (
        <main className="container contenu-principal">
            <Seo
                titre="Artisans de l’alimentation | Trouve ton artisan"
                description="Découvrez les boulangers, bouchers, chocolatiers et traiteurs en Auvergne-Rhône-Alpes et contactez un artisan."
            />
            <h1>Les artisans de l’alimentation</h1>

            {chargement && <p role="status">Chargement des artisans…</p>}
            {erreur && <p role="alert">{erreur}</p>}

            {!chargement && !erreur && (
                <div className="row">
                    {artisansAlimentation.map((artisan) => (
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

export default Alimentation