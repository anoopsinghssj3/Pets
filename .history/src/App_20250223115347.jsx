import './App.css'
import { Routes, Route } from 'react-router-dom'
// import Header from './Component/Header/Header'
import Shop from './Pages/Shop'
import Footer from './views/Component/Footer/Footer'
import Pets from './views/Component/Pets/Pets'
import Header from './views/Component/Header/Header'
function App() {
  return (
    <>
  
      <Header />
      <Routes>
        <Route />
        <Route path="/" element={<Shop />} />
    {/* warning ! check the right route  */}
        <Route path="/pets" element={<Pets />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
