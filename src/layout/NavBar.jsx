import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";


function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="navbar__container">
            <div className="navbar__wrapper">
                <button className="menu-toggle" onClick={handleMenuToggle}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <div className="brand">
                    <Link to="/" className="cosmic-store">Juguetería Cósmica</Link>
                </div>
                <nav className={`navbar__links ${showMenu ? "active" : ""}`}>
                    <Link to="/Alta">Alta</Link>
                    <Link to="/Contacto">Contacto</Link>
                    <Link to="/Nosotros">Nosotros</Link>
                </nav>
                <div className="cart-container">
                    <Cart />
                </div>
            </div>
        </header>
    );
}

export default NavBar;