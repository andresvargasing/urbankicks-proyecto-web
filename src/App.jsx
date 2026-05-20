import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accesibilidad from "./components/Accesibilidad";
import Equipo from "./pages/Equipo";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";
import PQR from "./pages/PQR";

import Privacidad from "./pages/Privacidad";
import DatosPersonales from "./pages/DatosPersonales";
import Terminos from "./pages/Terminos";

function App(){
  return(
    <>
    <Accesibilidad />
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Nosotros" element={<Nosotros/>} />
        <Route path="/Productos" element={<Productos/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="/Carrito" element={<Carrito/>} />
        <Route path="/PQR" element={<PQR/>} />
        <Route path="/Equipo" element={<Equipo/>}/>
        <Route path="/Privacidad" element={<Privacidad/>}/>
        <Route path="/DatosPersonales" element={<DatosPersonales/>}/>
        <Route path="/Terminos" element={<Terminos/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App