import CarteArtisan from '../components/CarteArtisan.jsx'
import artisans from '../data/artisans'

function Fabrication() {
    const artisansFabrication = artisans.filter(
        (artisan) => artisan.categorie === 'Fabrication'
    )

    return (
        <main className="container contenu-principal">
            <h1>Les artisans de la fabrication</h1>

            <div className="row">
                {artisansFabrication.map((artisan) => (
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
        </main>
    )
}

export default Fabrication