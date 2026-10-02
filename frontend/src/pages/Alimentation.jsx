import CarteArtisan from '../components/CarteArtisan.jsx'
import artisans from '../data/artisans'

function Alimentation() {
    const artisansAlimentation = artisans.filter(
        (artisan) => artisan.categorie === 'Alimentation'
    )

    return (
        <main className="container contenu-principal">
            <h1>Les artisans de l’alimentation</h1>

            <div className="row">
                {artisansAlimentation.map((artisan) => (
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

export default Alimentation