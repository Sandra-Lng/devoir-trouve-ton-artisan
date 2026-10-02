import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Accueil from './pages/Accueil.jsx'
import Recherche from './components/Recherche.jsx'
import { Routes, Route } from 'react-router'
import Batiment from './pages/Batiment.jsx'
import Services from './pages/Services'
import Fabrication from './pages/Fabrication'
import Alimentation from './pages/Alimentation'

function App() {
  return (
    <>
      <Header />
      <Recherche />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/batiment" element={<Batiment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fabrication" element={<Fabrication />} />
        <Route path="/alimentation" element={<Alimentation />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App