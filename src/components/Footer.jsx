import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className="footer">
            <div className="section-content footer-content">
                {/*logo*/}
                <div className="footer-brand">
                    <h2 className="footer-logo">UrbanKicks</h2>
                    <p>Lleva tu estilo al siguiente nivel.</p>
                </div>
                {/*links*/}
                <div className="footer-links">
                    <h3 className="title-footer">Navegar</h3>
                    <Link to={"/"}>Inicio</Link>
                    <Link to={"/Nosotros"}>Nosotros</Link>
                    <Link to={"/Productos"}>Productos</Link>
                    <Link to={"/Contacto"}>Contacto</Link>
                </div>
                {/*redes sociales*/}
                <div className="footer-social">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Whatsaap</a>
                <a href="#">Linkedin</a>
                </div>
                {/*politicas*/}
                <div className="footer-politica">
                    <h3 className="title-footer">Informacion</h3>
                    <a href="/Privacidad">Politica de Privacidad</a>
                    <a href="/DatosPersonales">Tratamiento de Datos</a>
                    <a href="/Terminos">Terminos y condiciones</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2026 UrbanKicks | Todos los derechos reservados</p>
            </div>
        </footer>
    )
}
export default Footer