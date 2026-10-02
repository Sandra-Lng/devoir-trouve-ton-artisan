import CarteArtisan from '../components/CarteArtisan'
import boucher from '../assets/icons/boucher.svg'
import pain from '../assets/icons/pain.svg'
import chocolat from '../assets/icons/chocolat.svg'
import traiteur from '../assets/icons/traiteur.svg'


function Alimentation() {
  return (
    <main className="container contenu-principal">
      <h1>Les artisans de l’alimentation</h1>

      <div className="row">
        <div className="col-12 col-md-6">
          <CarteArtisan
            nom="Boucherie Dumont"
            note={4.5}
            specialite="Boucher"
            ville="Lyon"
            icone={boucher}
            lien="/artisan/boucherie-dumont"
          />
        </div>

        <div className="col-12 col-md-6">
          <CarteArtisan
            nom="Au pain chaud"
            note={4.8}
            specialite="Boulanger"
            ville="Montélimar"
            icone={pain}
            lien="/artisan/au-pain-chaud"
          />
        </div>

        <div className="col-12 col-md-6">
          <CarteArtisan
            nom="Chocolaterie Labbé"
            note={4.9}
            specialite="Chocolatier"
            ville="Lyon"
            icone={chocolat}
            lien="/artisan/chocolaterie-labbe"
          />
        </div>

        <div className="col-12 col-md-6">
          <CarteArtisan
            nom="Traiteur Truchon"
            note={4.1}
            specialite="Traiteur"
            ville="Lyon"
            icone={traiteur}
            lien="/artisan/traiteur-truchon"
          />
        </div>
      </div>
    </main>
  )
}

export default Alimentation