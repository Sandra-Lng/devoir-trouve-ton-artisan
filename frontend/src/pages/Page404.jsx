import { Link } from 'react-router'
import illustration from '../assets/img/erreur-404.svg'
import Seo from '../components/Seo'

function Page404() {
    return (
        <main id="contenu-principal"
                tabIndex={-1}
                className="container contenu-principal">
            <Seo
                titre="Page introuvable | Trouve ton artisan"
                description="Cette page est introuvable. Retournez à l’accueil pour trouver un artisan en Auvergne-Rhône-Alpes."
            />
            <img
                src={illustration}
                alt=""
                className="illustration-404"
            />

            <h1>Page non trouvée</h1>
            <p>La page que vous recherchez n’existe pas.</p>

            <Link to="/" className="btn btn-primary">
                Retour à l’accueil
            </Link>
        </main>
    )
}

export default Page404