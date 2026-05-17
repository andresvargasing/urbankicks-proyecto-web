function Contacto(){
    return(
        <section className="contacto-page">
            <div className="section-content">
                <h2 className="section-title">Contactanos</h2>
                    <div className="redes-sociales">
                        <a href="#">Instagram</a>
                        <a href="#">Facebook</a>
                        <a href="#">WhatsApp</a>
                        <a href="#">Linkedin</a>
                    </div>
                <div className="contacto-container">
                    <div className="contacto-info">
                        <h3>UrbanKicks</h3>
                        <p>¿Tienes dudas sobre nuestros productos, pedidos o envios? Contactanos y te respondemos al instante.</p>
                        <div className="info-item">Bogota, Colombia</div>
                        <div className="info-item">+57 300 123 4567</div>
                        <div className="info-item">urbankicks@gmail.com</div>
                    </div>
                    <form className="contacto-form">
                        <input type="text" placeholder="Nombre Completo" required />
                        <input type="email" placeholder="Correo Electronico" required />
                        <textarea type="text"placeholder="Mensaje" required />
                        <button className="contacto-btn">Enviar Mensaje</button>
                    </form>
                    <div className="mapa-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.1290274973567!2d-74.08472825268063!3d4.60279622169814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f990cf9320be3%3A0xf99eef6299cc64a7!2sPlaza%20Espa%C3%B1a!5e0!3m2!1ses!2sco!4v1778968834295!5m2!1ses!2sco" width="100%" height="350" style={{border:0}}  allowfullscreen="" loading="lazy"></iframe>
                    </div> 
                </div>
            </div>
        </section>
    )
}
export default Contacto