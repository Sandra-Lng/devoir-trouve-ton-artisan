import etoile from '../assets/icons/etoile.svg'

function NoteArtisan({ note }) {
  return (
    <div className="note-artisan">
      <span className="etoiles-artisan" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((position) => {
          const remplissage = Math.min(
            100,
            Math.max(0, (note - position) * 100)
          )

          return (
            <span className="etoile-note" key={position}>
              <img src={etoile} alt="" className="etoile-grise" />

              <span
                className="etoile-remplissage"
                style={{ width: `${remplissage}%` }}
              >
                <img src={etoile} alt="" />
              </span>
            </span>
          )
        })}
      </span>

      <span>{note}/5</span>
    </div>
  )
}

export default NoteArtisan