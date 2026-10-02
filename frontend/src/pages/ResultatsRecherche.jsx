import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import { recupererArtisans } from '../services/api'
import CarteArtisan from '../components/CarteArtisan'

function ResultatsRecherche() {
    const [parametres] = useSearchParams()
    const nomRecherche = parametres.get('nom') || ''

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
                    setErreur('Impossible de charger les résultats.')
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

    const resultats = artisans.filter((artisan) =>
        artisan.nom.toLowerCase().includes(nomRecherche.trim().toLowerCase())
    )

    return (
        <main className="container contenu-principal">
            <h1>Résultats de recherche</h1>
            <p>Recherche : {nomRecherche}</p>

            {chargement && <p role="status">Chargement des résultats…</p>}
            {erreur && <p role="alert">{erreur}</p>}

            {!chargement && !erreur && (
                resultats.length === 0 ? (
                    <p>Aucun artisan trouvé pour ce nom.</p>
                ) : (
                    <div className="row">
                        {resultats.map((artisan) => (
                            <div className="col-12 col-md-6" key={artisan.slug}>
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
                )
            )}
        </main>
    )
}

export default ResultatsRecherche