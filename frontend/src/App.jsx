import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Accueil from './pages/Accueil.jsx'
import Recherche from './components/Recherche.jsx'
import { Routes, Route } from 'react-router'
import Batiment from './pages/Batiment.jsx'

function App() {
  return (
    <>
      <Header />
      <Recherche />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/batiment" element={<Batiment />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App