import { useEffect, useState } from 'react'
import CarteArtisan from '../components/CarteArtisan.jsx'
import { recupererArtisans } from '../services/api'
import Seo from '../components/Seo'

function Batiment() {
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

    const artisansBatiment = artisans.filter(
        (artisan) => artisan.categorie === 'Bâtiment'
    )

    return (
        <main className="container contenu-principal">
            <Seo
                titre="Artisans du bâtiment | Trouve ton artisan"
                description="Trouvez un menuisier, un électricien, un chauffagiste ou un plombier en Auvergne-Rhône-Alpes et contactez-le."
            />
            <h1>Les artisans du bâtiment</h1>

            {chargement && <p role="status">Chargement des artisans…</p>}
            {erreur && <p role="alert">{erreur}</p>}

            {!chargement && !erreur && (
                <div className="row">
                    {artisansBatiment.map((artisan) => (
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

export default Batiment