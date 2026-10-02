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
                        <a href="/mentions-legales">Mentions légales</a>
                    </li>
                    <li>
                        <a href="/donnees-personnelles">Données personnelles</a>
                    </li>
                    <li>
                        <a href="/accessibilite">Accessibilité</a>
                    </li>
                    <li>
                        <a href="/cookies">Cookies</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer