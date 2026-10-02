import { Link } from 'react-router'
import localisation from '../assets/icons/localisation.svg'
import chevron from '../assets/icons/chevron.svg'
import etoile from '../assets/icons/etoile.svg'

function CarteArtisan({ nom, note, specialite, ville, icone, lien }) {
    return (
        <article className="carte-artisan">
            <img src={icone} alt="" width="40" height="40" />

            <div>
                <h3>
                    <Link to={lien}>{nom}</Link>
                </h3>

                <div className="note-artisan">
                    <span className="etoiles-artisan" aria-hidden="true">
                        {[0, 1, 2, 3, 4].map((position) => {
                            const remplissage = Math.min(
                                100,
                                Math.max(0, (note - position) * 100)
                            )

                            return (
                                <span className="etoile-note" key={position}>
                                    <img
                                        src={etoile}
                                        alt=""
                                        className="etoile-grise"
                                    />

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

                <p>{specialite}</p>

                <p className="ville-artisan">
                    <img src={localisation} alt="" width="16" height="16" />
                    {ville}
                </p>
            </div>

            <img
                src={chevron}
                alt=""
                width="20"
                height="20"
                className="chevron-artisan"
            />
        </article>
    )
}

export default CarteArtisan