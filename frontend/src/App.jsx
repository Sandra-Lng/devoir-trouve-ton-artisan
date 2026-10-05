import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Accueil from './pages/Accueil.jsx'
import Recherche from './components/Recherche.jsx'
import { Routes, Route } from 'react-router'
import Batiment from './pages/Batiment.jsx'
import Services from './pages/Services'
import Fabrication from './pages/Fabrication'
import Alimentation from './pages/Alimentation'
import FicheArtisan from './pages/FicheArtisan'
import ResultatsRecherche from './pages/ResultatsRecherche'
import Page404 from './pages/Page404'
import PageConstruction from './pages/PageConstruction'

function App() {
  return (
    <>
      <a href="#contenu-principal" className="lien-evitement">
        Aller au contenu
      </a>
      <Header />
      <Recherche />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/batiment" element={<Batiment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fabrication" element={<Fabrication />} />
        <Route path="/alimentation" element={<Alimentation />} />
        <Route path="/artisan/:slug" element={<FicheArtisan />} />
        <Route path="/recherche" element={<ResultatsRecherche />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/mentions-legales" element={<PageConstruction />} />
        <Route path="/donnees-personnelles" element={<PageConstruction />} />
        <Route path="/accessibilite" element={<PageConstruction />} />
        <Route path="/cookies" element={<PageConstruction />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App