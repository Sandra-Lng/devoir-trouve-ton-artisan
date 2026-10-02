import { useState } from 'react'
import logo from '../assets/Logo.png'
import batiment from '../assets/icons/batiment.svg'
import services from '../assets/icons/services.svg'
import fabrication from '../assets/icons/fabrication.svg'
import alimentation from '../assets/icons/alimentation.svg'


function Header() {
    const [menuOuvert, setMenuOuvert] = useState(false)

    return (
        <>
            <div className="zone-navigation">
                <header className="container py-3 d-flex justify-content-between align-items-center">
                    <a href="/" aria-label="Accueil">
                        <img
                            src={logo}
                            alt="Trouve ton artisan — Auvergne-Rhône-Alpes"
                            className="site-logo"
                        />
                    </a>
                    <nav className="menu-desktop" aria-label="Menu principal">
                        <a href="/categorie/batiment">Bâtiment</a>
                        <a href="/categorie/services">Services</a>
                        <a href="/categorie/fabrication">Fabrication</a>
                        <a href="/categorie/alimentation">Alimentation</a>
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
                </header>

                <nav
                    id="menu-principal"
                    className="container"
                    aria-label="Menu principal"
                    hidden={!menuOuvert}
                >
                    <ul className="list-unstyled">
                        <li>
                            <a href="/categorie/batiment">
                                <img src={batiment} alt="" width="24" height="24" />
                                Bâtiment
                            </a>
                        </li>
                        <li>
                            <a href="/categorie/services">
                                <img src={services} alt="" width="24" height="24" />
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/categorie/fabrication">
                                <img src={fabrication} alt="" width="24" height="24" />
                                Fabrication
                            </a>
                        </li>
                        <li>
                            <a href="/categorie/alimentation">
                                <img src={alimentation} alt="" width="24" height="24" />
                                Alimentation
                            </a>
                        </li>
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