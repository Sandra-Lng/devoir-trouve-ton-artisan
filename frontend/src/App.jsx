import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Accueil from './pages/Accueil.jsx'

function App() {
  return (
    <>
      <Header />
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
      <Accueil />

      <Footer />
    </>
  )
}

export default App