import chauffage from '../assets/icons/chauffage.svg'
import marteau from '../assets/icons/marteau.svg'
import electricite from '../assets/icons/electricite.svg'
import plomberie from '../assets/icons/plombier.svg'
import boucher from '../assets/icons/boucher.svg'
import pain from '../assets/icons/pain.svg'
import chocolat from '../assets/icons/chocolat.svg'
import traiteur from '../assets/icons/traiteur.svg'
import bijoutier from '../assets/icons/bijoutier.svg'
import couturier from '../assets/icons/couturier.svg'
import ferronnier from '../assets/icons/ferronnier.svg'
import coiffure from '../assets/icons/coiffure.svg'
import fleuriste from '../assets/icons/fleuriste.svg'
import toilettage from '../assets/icons/toilettage.svg'
import webdesign from '../assets/icons/webdesign.svg'

const texteApropos =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.'
const artisans = [

  {
    slug: 'orville-salmons',
    categorie: 'Bâtiment',
    top: true,
    nom: 'Orville Salmons',
    specialite: 'Chauffagiste',
    note: 5,
    ville: 'Evian',
    icone: chauffage,
    apropos:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    siteWeb: null,
  },
    {
    slug: 'boutot-et-fils',
    categorie: 'Bâtiment',
    nom: 'Boutot & fils',
    specialite: 'Menuisier',
    note: 4.7,
    ville: 'Bourg-en-Bresse',
    icone: marteau,
    apropos:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    siteWeb: 'https://boutot-menuiserie.com',
  },
    {
    slug: 'mont-blanc-electricite',
    categorie: 'Bâtiment',
    nom: 'Mont Blanc Eléctricité',
    specialite: 'Electricien',
    note: 4.5,
    ville: 'Chamonix',
    icone: electricite,
    apropos:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    siteWeb: 'https://mont-blanc-electricite.com',
  },
  {
    slug: 'vallis-bellemare',
    categorie: 'Bâtiment',
    nom: 'Vallis Bellemare',
    specialite: 'Plombier',
    note: 4,
    ville: 'Vienne',
    icone: plomberie,
    apropos:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.',
    siteWeb: 'https://plomberie-bellemare.com',
  },
    {
    slug: 'boucherie-dumont',
    categorie: 'Alimentation',
    nom: 'Boucherie Dumont',
    specialite: 'Boucher',
    note: 4.5,
    ville: 'Lyon',
    icone: boucher,
    apropos: texteApropos,
    siteWeb: null,
  },
  {
    slug: 'au-pain-chaud',
    categorie: 'Alimentation',
    top: true,
    nom: 'Au pain chaud',
    specialite: 'Boulanger',
    note: 4.8,
    ville: 'Montélimar',
    icone: pain,
    apropos: texteApropos,
    siteWeb: null,
  },
  {
    slug: 'chocolaterie-labbe',
    categorie: 'Alimentation',
    top: true,
    nom: 'Chocolaterie Labbé',
    specialite: 'Chocolatier',
    note: 4.9,
    ville: 'Lyon',
    icone: chocolat,
    apropos: texteApropos,
    siteWeb: 'https://chocolaterie-labbe.fr',
  },
  {
    slug: 'traiteur-truchon',
    categorie: 'Alimentation',
    nom: 'Traiteur Truchon',
    specialite: 'Traiteur',
    note: 4.1,
    ville: 'Lyon',
    icone: traiteur,
    apropos: texteApropos,
    siteWeb: 'https://truchon-traiteur.fr',
  },
    {
    slug: 'claude-quinn',
    categorie: 'Fabrication',
    nom: 'Claude Quinn',
    specialite: 'Bijoutier',
    note: 4.2,
    ville: 'Aix-les-Bains',
    icone: bijoutier,
    apropos: texteApropos,
    siteWeb: null,
  },
  {
    slug: 'amitee-lecuyer',
    categorie: 'Fabrication',
    nom: 'Amitee Lécuyer',
    specialite: 'Couturier',
    note: 4.5,
    ville: 'Annecy',
    icone: couturier,
    apropos: texteApropos,
    siteWeb: 'https://lecuyer-couture.com',
  },
  {
    slug: 'ernest-carignan',
    categorie: 'Fabrication',
    nom: 'Ernest Carignan',
    specialite: 'Ferronier',
    note: 5,
    ville: 'Le Puy-en-Velay',
    icone: ferronnier,
    apropos: texteApropos,
    siteWeb: null,
  },
    {
    slug: 'royden-charbonneau',
    categorie: 'Services',
    nom: 'Royden Charbonneau',
    specialite: 'Coiffeur',
    note: 3.8,
    ville: 'Saint-Priest',
    icone: coiffure,
    apropos: texteApropos,
    siteWeb: null,
  },
  {
    slug: 'leala-dennis',
    categorie: 'Services',
    nom: 'Leala Dennis',
    specialite: 'Coiffeur',
    note: 3.8,
    ville: 'Chambéry',
    icone: coiffure,
    apropos: texteApropos,
    siteWeb: 'https://coiffure-leala-chambery.fr',
  },
  {
    slug: 'cest-suphair',
    categorie: 'Services',
    nom: "C'est sup'hair",
    specialite: 'Coiffeur',
    note: 4.1,
    ville: 'Romans-sur-Isère',
    icone: coiffure,
    apropos: texteApropos,
    siteWeb: 'https://sup-hair.fr',
  },
  {
    slug: 'le-monde-des-fleurs',
    categorie: 'Services',
    nom: 'Le monde des fleurs',
    specialite: 'Fleuriste',
    note: 4.6,
    ville: 'Annonay',
    icone: fleuriste,
    apropos: texteApropos,
    siteWeb: 'https://le-monde-des-fleurs-annonay.fr',
  },
  {
    slug: 'valerie-laderoute',
    categorie: 'Services',
    nom: 'Valérie Laderoute',
    specialite: 'Toiletteur',
    note: 4.5,
    ville: 'Valence',
    icone: toilettage,
    apropos: texteApropos,
    siteWeb: null,
  },
  {
    slug: 'cm-graphisme',
    categorie: 'Services',
    nom: 'CM Graphisme',
    specialite: 'Webdesign',
    note: 4.4,
    ville: 'Valence',
    icone: webdesign,
    apropos: texteApropos,
    siteWeb: 'https://cm-graphisme.com',
  },
]

export default artisans