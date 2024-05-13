import { BrowserRouter, Route, Routes } from "react-router-dom"

import NavBar from "../layout/NavBar"
import Footer from "../layout/Footer"

import Home from "../pages/Home"
import Alta from "../pages/Alta"
import Contacto from "../pages/Contacto"
import Nosotros from "../pages/Nosotros"


function RouterApp() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/alta" element={<Alta />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/nosotros" element={<Nosotros />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RouterApp