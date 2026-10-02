import iconesSpecialites from '../data/iconesSpecialites'

const adresseApi = 'http://localhost:3000/api'

export async function recupererArtisans() {
    const reponse = await fetch(`${adresseApi}/artisans`)

    if (!reponse.ok) {
        throw new Error('Impossible de récupérer les artisans')
    }

    const artisans = await reponse.json()

    return artisans.map((artisan) => ({
        slug: artisan.slug,
        nom: artisan.nom,
        note: Number(artisan.note),
        ville: artisan.ville,
        apropos: artisan.apropos,
        siteWeb: artisan.site_web,
        top: artisan.top,
        specialite: artisan.specialite.nom,
        categorie: artisan.specialite.categorie.nom,
        icone: iconesSpecialites[artisan.specialite.nom],
    }))
}
export async function recupererCategories() {
    const reponse = await fetch(`${adresseApi}/categories`)

    if (!reponse.ok) {
        throw new Error('Impossible de récupérer les catégories')
    }

    return reponse.json()
}