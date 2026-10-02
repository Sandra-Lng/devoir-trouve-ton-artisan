import { useEffect, useState } from 'react'
import logo from '../assets/Logo.png'
import batiment from '../assets/icons/batiment.svg'
import services from '../assets/icons/services.svg'
import fabrication from '../assets/icons/fabrication.svg'
import alimentation from '../assets/icons/alimentation.svg'
import { recupererCategories } from '../services/api'
import { Link } from 'react-router'

const iconesCategories = {
    batiment: batiment,
    services: services,
    fabrication: fabrication,
    alimentation: alimentation,
}

function Header() {
    const [menuOuvert, setMenuOuvert] = useState(false)
    const [categories, setCategories] = useState([])
    const [erreurCategories, setErreurCategories] = useState('')

    useEffect(() => {
        let actif = true

        async function chargerCategories() {
            try {
                const donnees = await recupererCategories()

                if (actif) {
                    setCategories(donnees)
                }
            } catch {
                if (actif) {
                    setErreurCategories('Impossible de charger le menu.')
                }
            }
        }

        chargerCategories()

        return () => {
            actif = false
        }
    }, [])

    return (
        <>
            <div className="zone-navigation">
                <header className="container py-3 d-flex justify-content-between align-items-center">
                    <Link
                        to="/"
                        aria-label="Accueil"
                        onClick={() => setMenuOuvert(false)}
                    >
                        <img
                            src={logo}
                            alt="Trouve ton artisan — Auvergne-Rhône-Alpes"
                            className="site-logo"
                        />
                    </Link>
                    <nav className="menu-desktop" aria-label="Menu principal">
                        {categories.map((categorie) => (
                            <Link key={categorie.id} to={`/${categorie.slug}`}>
                                {categorie.nom}
                            </Link>
                        ))}
                    </nav>
                    <button
                        type="button"
                        className="btn bouton-menu"
                        onClick={() => setMenuOuvert(!menuOuvert)}
                        aria-expanded={menuOuvert}
                        aria-controls="menu-principal"
                        aria-label={menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu'}
                    >
                        {menuOuvert ? '✕' : '☰'}
                    </button>
                    {erreurCategories && <p role="alert">{erreurCategories}</p>}
                </header>

                <nav
                    id="menu-principal"
                    className="container"
                    aria-label="Menu principal"
                    hidden={!menuOuvert}
                >
                    <ul className="list-unstyled">
                        {categories.map((categorie) => (
                            <li key={categorie.id}>
                                <Link
                                    to={`/${categorie.slug}`}
                                    onClick={() => setMenuOuvert(false)}
                                >
                                    <img
                                        src={iconesCategories[categorie.slug]}
                                        alt=""
                                        width="24"
                                        height="24"
                                    />
                                    {categorie.nom}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {menuOuvert && (
                <button
                    type="button"
                    className="fond-menu"
                    aria-label="Fermer le menu"
                    onClick={() => setMenuOuvert(false)}
                />
            )}
        </>
    )
}

export default Header