import { Link } from 'react-router'
import illustration from '../assets/img/erreur-404.svg'

function Page404() {
    return (
        <main className="container contenu-principal text-center">
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