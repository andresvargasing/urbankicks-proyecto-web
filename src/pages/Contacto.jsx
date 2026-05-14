function Contacto(){
    return(
        <section className="contacto-page">
            <div className="section-content">
                <h2 className="section-title">Contactanos</h2>
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
                </div>
            </div>
        </section>
    )
}
export default Contacto