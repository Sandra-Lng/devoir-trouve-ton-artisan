import { useLocation } from 'react-router'
import Seo from '../components/Seo'

function PageConstruction() {
    const { pathname } = useLocation()

    const titres = {
        '/mentions-legales': 'Mentions légales',
        '/donnees-personnelles': 'Données personnelles',
        '/accessibilite': 'Accessibilité',
        '/cookies': 'Cookies',
    }

    const titre = titres[pathname] || 'Page en construction'

    return (
        <main id="contenu-principal"
                tabIndex={-1}
                className="container contenu-principal">
            <Seo
                titre={`${titre} | Trouve ton artisan`}
                description={`La page ${titre} du site Trouve ton artisan est en construction.`}
            />
            <h1>Page en construction</h1>
        </main>
    )
}

export default PageConstruction