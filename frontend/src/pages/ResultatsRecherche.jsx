import { useSearchParams } from 'react-router'
import artisans from '../data/artisans'
import CarteArtisan from '../components/CarteArtisan'

function ResultatsRecherche() {
  const [parametres] = useSearchParams()
  const nomRecherche = parametres.get('nom') || ''

  const resultats = artisans.filter((artisan) =>
    artisan.nom.toLowerCase().includes(nomRecherche.trim().toLowerCase())
  )

  return (
    <main className="container contenu-principal">
      <h1>Résultats de recherche</h1>
      <p>Recherche : {nomRecherche}</p>

      {resultats.length === 0 ? (
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
      )}
    </main>
  )
}

export default ResultatsRecherche