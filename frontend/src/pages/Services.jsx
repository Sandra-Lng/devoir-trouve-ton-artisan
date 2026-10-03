import { useEffect, useState } from 'react'
import CarteArtisan from '../components/CarteArtisan.jsx'
import { recupererArtisans } from '../services/api'
import Seo from '../components/Seo'

function Services() {
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

    const artisansServices = artisans.filter(
        (artisan) => artisan.categorie === 'Services'
    )

    return (
        <main className="container contenu-principal">
            <Seo
                titre="Artisans des services | Trouve ton artisan"
                description="Trouvez un coiffeur, un fleuriste, un toiletteur ou un professionnel du webdesign en Auvergne-Rhône-Alpes."
            />
            <h1>Les artisans des services</h1>

            {chargement && <p role="status">Chargement des artisans…</p>}
            {erreur && <p role="alert">{erreur}</p>}

            {!chargement && !erreur && (
                <div className="row">
                    {artisansServices.map((artisan) => (
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
            )}
        </main>
    )
}

export default Services