import { useEffect } from 'react'

function Seo({ titre, description }) {
    useEffect(() => {
        document.title = titre
    }, [titre])

    return <meta name="description" content={description} />
}

export default Seo