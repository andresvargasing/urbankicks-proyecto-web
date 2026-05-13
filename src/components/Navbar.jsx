import { Link } from "react-router-dom"

function Navbar(){
    return(
        <header>
        <nav className="navegacion section-content">
            <div className="nav-logo">
                <h2 className="logo-text">UrbanKicks</h2>
            </div>
            <ul className="nav-menu">
                <li className="nav-item">
                    <Link to="/" className="nav-link" >Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Nosotros" className="nav-link" >Nosotros</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Productos" className="nav-link" >Productos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Contacto" className="nav-link" >Contacto</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Carrito" className="nav-link" >Carrito</Link>
                </li>
                <li className="nav-item">
                    <Link to="/PQR" className="nav-link" >PQR</Link>
                </li>
            </ul>
        </nav>
        </header>
    )
}
export default Navbar