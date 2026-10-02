import { Link } from 'react-router'
import localisation from '../assets/icons/localisation.svg'
import chevron from '../assets/icons/chevron.svg'
import NoteArtisan from './NoteArtisan'

function CarteArtisan({ nom, note, specialite, ville, icone, lien }) {
    return (
        <article className="carte-artisan position-relative">
            <img src={icone} alt="" width="40" height="40" />

            <div>
                <h3>
                    <Link to={lien} className="stretched-link">{nom}</Link>
                </h3>

                <NoteArtisan note={note} />

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