import CarteArtisan from '../components/CarteArtisan'
import coiffure from '../assets/icons/coiffure.svg'
import fleuriste from '../assets/icons/fleuriste.svg'
import toilettage from '../assets/icons/toilettage.svg'
import webdesign from '../assets/icons/webdesign.svg'

function Services() {
  return (
    <main className="container contenu-principal">
      <h1>Les artisans des services</h1>

      <div className="row">
        <div className="col-12 col-md-6">
          <CarteArtisan
            nom="Royden Charbonneau"
            note={3.8}
            specialite="Coiffeur"
            ville="Saint-Priest"
            icone={coiffure}
            lien="/artisan/royden-charbonneau"
          />
        </div>

        <div className="col-12 col-md-6">
          <CarteArtisan
            nom="Leala Dennis"
            note={3.8}
            specialite="Coiffeur"
            ville="Chambéry"
            icone={coiffure}
            lien="/artisan/leala-dennis"
          />
        </div>

        <div className="col-12 col-md-6">
          <CarteArtisan
            nom="C’est sup’hair"
            note={4.1}
            specialite="Coiffeur"
            ville="Romans-sur-Isère"
            icone={coiffure}
            lien="/artisan/cest-suphair"
          />
        </div>

        <div className="col-12 col-md-6">
          <CarteArtisan
            nom="Le monde des fleurs"
            note={4.6}
            specialite="Fleuriste"
            ville="Annonay"
            icone={fleuriste}
            lien="/artisan/le-monde-des-fleurs"
          />
        </div>

        <div className="col-12 col-md-6">
          <CarteArtisan
            nom="Valérie Laderoute"
            note={4.5}
            specialite="Toiletteur"
            ville="Valence"
            icone={toilettage}
            lien="/artisan/valerie-laderoute"
          />
        </div>

        <div className="col-12 col-md-6">
          <CarteArtisan
            nom="CM Graphisme"
            note={4.4}
            specialite="Webdesign"
            ville="Valence"
            icone={webdesign}
            lien="/artisan/cm-graphisme"
          />
        </div>
      </div>
    </main>
  )
}

export default Services