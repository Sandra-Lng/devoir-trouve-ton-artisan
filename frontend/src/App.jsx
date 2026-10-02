import logo from './assets/Logo.png'
import { useState } from 'react'
import batiment from './assets/icons/batiment.svg'
import services from './assets/icons/services.svg'
import fabrication from './assets/icons/fabrication.svg'
import alimentation from './assets/icons/alimentation.svg'

function App() {
  const [menuOuvert, setMenuOuvert] = useState(false)
  return (
    <>
      <header className="container py-3 d-flex justify-content-between align-items-center">
        <a href="/" aria-label="Accueil">
          <img
            src={logo}
            alt="Trouve ton artisan — Auvergne-Rhône-Alpes"
            className="site-logo"
          />
        </a>
        <button
            type="button"
            className="btn"
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
          <li><a href="/categorie/batiment">Bâtiment</a></li>
          <li><a href="/categorie/services">Services</a></li>
          <li><a href="/categorie/fabrication">Fabrication</a></li>
          <li><a href="/categorie/alimentation">Alimentation</a></li>
        </ul>
      </nav>

      <div className="container mt-3">
        <label htmlFor="recherche" className="visually-hidden">
          Rechercher un artisan par son nom
        </label>

        <div className="champ-recherche">
        <svg
          className="icone-recherche"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="10" cy="10" r="6" />
          <path d="m15 15 5 5" />
        </svg>

  <input
    id="recherche"
    type="search"
    className="form-control"
    placeholder="Rechercher un artisan"
  />
</div>
      </div>

      <main className="container contenu-principal">
        <h1>Trouvez votre artisan</h1>
        <p>Découvrez les artisans de la région Auvergne-Rhône-Alpes.</p>
        <div className="row g-3 mt-3">
          <div className="col-6">
            <a
              href="/categorie/batiment"
              className="btn btn-outline-primary w-100 bouton-categorie"
            >
              <img src={batiment} alt="" width="28" height="28" />
              Bâtiment
            </a>
          </div>

          <div className="col-6">
            <a
              href="/categorie/services"
              className="btn btn-outline-primary w-100 bouton-categorie"
            >
              <img src={services} alt="" width="28" height="28" />
              Services
            </a>
          </div>

          <div className="col-6">
            <a
            href="/categorie/fabrication"
            className="btn btn-outline-primary w-100 bouton-categorie"
          >
            <img src={fabrication} alt="" width="28" height="28" />
            Fabrication
          </a>
          </div>

          <div className="col-6">
            <a
              href="/categorie/alimentation"
              className="btn btn-outline-primary w-100 bouton-categorie"
            >
              <img src={alimentation} alt="" width="28" height="28" />
              Alimentation
            </a>
          </div>
        </div>
        <section className="mt-5">
          <h2>Comment trouver mon artisan ?</h2>

          <ol className="etapes">
            <li>Choisir la catégorie d’artisanat dans le menu.</li>
            <li>Choisir un artisan.</li>
            <li>Le contacter via le formulaire de contact.</li>
            <li>Une réponse sera apportée sous 48h.</li>
          </ol>
        </section>
        <section className="mt-5">
  <h2>Artisans du mois</h2>

  <div className="row">
    <div className="col-12 col-md-6 col-lg-4">
      <article className="carte-artisan">
        <h3>
          <a href="/artisan/au-pain-chaud">Au pain chaud</a>
        </h3>
        <p>4,8 / 5</p>
        <p>Boulanger</p>
        <p>Montélimar</p>
      </article>
    </div>

    <div className="col-12 col-md-6 col-lg-4">
      <article className="carte-artisan">
        <h3>
          <a href="/artisan/chocolaterie-labbe">Chocolaterie Labbé</a>
        </h3>
        <p>4,9 / 5</p>
        <p>Chocolatier</p>
        <p>Lyon</p>
      </article>
    </div>

    <div className="col-12 col-md-6 col-lg-4">
      <article className="carte-artisan">
        <h3>
          <a href="/artisan/orville-salmons">Orville Salmons</a>
        </h3>
        <p>5 / 5</p>
        <p>Chauffagiste</p>
        <p>Evian</p>
      </article>
    </div>
  </div>
</section>
      </main>
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
    </>
  )
}

export default App