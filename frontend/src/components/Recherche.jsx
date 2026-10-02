import { useState } from 'react'
import { useNavigate } from 'react-router'

function Recherche() {
  const [nomRecherche, setNomRecherche] = useState('')
  const navigate = useNavigate()

  function rechercher(event) {
    event.preventDefault()

    const nom = nomRecherche.trim()

    if (nom) {
      navigate(`/recherche?nom=${encodeURIComponent(nom)}`)
    }
  }

  return (
    <form className="container mt-3" role="search" onSubmit={rechercher}>
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
          value={nomRecherche}
          onChange={(event) => setNomRecherche(event.target.value)}
        />
      </div>
    </form>
  )
}

export default Recherche