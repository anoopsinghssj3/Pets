import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './view/Component/Header/Header'
import Shop from './Pages/Shop'
import Footer from './Component/Footer/Footer'
import Pets from './Component/Pets/Pets'
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
