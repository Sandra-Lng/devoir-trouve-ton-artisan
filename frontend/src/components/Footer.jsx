import { Link } from 'react-router'

function Footer() {
    return (
        <footer className="pied-de-page">
            <div className="container">
                <h2>Région Auvergne-Rhône-Alpes</h2>

                <p>
                    101 cours Charlemagne<br />
                    CS 20033<br />
                    69269 LYON CEDEX 02<br />
                    France<br />
                    <a href="tel:+33426734000">+33 (0)4 26 73 40 00</a>
                </p>

                <hr />

                <ul className="list-unstyled liens-footer">
                    <li>
                        <Link to="/mentions-legales">Mentions légales</Link>
                    </li>
                    <li>
                        <Link to="/donnees-personnelles">Données personnelles</Link>
                    </li>
                    <li>
                        <Link to="/accessibilite">Accessibilité</Link>
                    </li>
                    <li>
                        <Link to="/cookies">Cookies</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer