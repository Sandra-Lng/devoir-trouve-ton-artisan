import CarteArtisan from '../components/CarteArtisan'
import bijoutier from '../assets/icons/bijoutier.svg'
import couturier from '../assets/icons/couturier.svg'
import ferronnier from '../assets/icons/ferronnier.svg'

function Fabrication() {
  return (
    <main className="container contenu-principal">
      <h1>Les artisans de la fabrication</h1>

      <div className="row">
        <div className="col-12 col-md-6">
          <CarteArtisan
            nom="Claude Quinn"
            note={4.2}
            specialite="Bijoutier"
            ville="Aix-les-Bains"
            icone={bijoutier}
            lien="/artisan/claude-quinn"
          />
        </div>

        <div className="col-12 col-md-6">
          <CarteArtisan
            nom="Amitee Lécuyer"
            note={4.5}
            specialite="Couturier"
            ville="Annecy"
            icone={couturier}
            lien="/artisan/amitee-lecuyer"
          />
        </div>

        <div className="col-12 col-md-6">
          <CarteArtisan
            nom="Ernest Carignan"
            note={5}
            specialite="Ferronier"
            ville="Le Puy-en-Velay"
            icone={ferronnier}
            lien="/artisan/ernest-carignan"
          />
        </div>
      </div>
    </main>
  )
}

export default Fabrication