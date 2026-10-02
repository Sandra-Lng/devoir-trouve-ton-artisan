import CarteArtisan from '../components/CarteArtisan.jsx'
import chauffage from '../assets/icons/chauffage.svg'
import marteau from '../assets/icons/marteau.svg'
import electricite from '../assets/icons/electricite.svg'
import plomberie from '../assets/icons/plombier.svg'

function Batiment() {
    return (
        <main className="container contenu-principal">
            <h1>Les artisans du bâtiment</h1>
            <div className="row">
                <div className="col-12 col-md-6">
                    <CarteArtisan
                        nom="Boutot & fils"
                        note={4.7}
                        specialite="Menuisier"
                        ville="Bourg-en-Bresse"
                        icone={marteau}
                        lien="/artisan/boutot-et-fils"
                    />
                </div>

                <div className="col-12 col-md-6">
                    <CarteArtisan
                        nom="Mont Blanc Électricité"
                        note={4.5}
                        specialite="Electricien"
                        ville="Chamonix"
                        icone={electricite}
                        lien="/artisan/mont-blanc-electricite"
                    />
                </div>
                <div className="col-12 col-md-6">
                    <CarteArtisan
                        nom="Orville Salmons"
                        note={5}
                        specialite="Chauffagiste"
                        ville="Evian"
                        icone={chauffage}
                        lien="/artisan/orville-salmons"
                    />
                </div>
                <div className="col-12 col-md-6">
                    <CarteArtisan
                        nom="Vallis Bellemare"
                        note={4}
                        specialite="Plombier"
                        ville="Vienne"
                        icone={plomberie}
                        lien="/artisan/vallis-bellemare"
                    />
                </div>
            </div>
        </main>
    )
}

export default Batiment