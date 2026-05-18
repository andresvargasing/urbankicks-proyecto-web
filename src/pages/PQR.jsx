import { useState } from "react";

function PQR(){
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [tipo, setTipo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState(false);

    const manejarEnvio = (e) => {
        e.preventDefault();
        if(
            nombre === ""||
            correo === ""||
            tipo === ""||
            mensaje === ""
        ){
            alert("Completa todos los campos");
            return;
        }
            setEnviado(true);

            setNombre("");
            setCorreo("");
            setTipo("");
            setMensaje("");
        };
        return(
            <section className="pqr-section">
                <div className="section-content">
                    <h2 className="section-title">PQR</h2>
                    <form className="pqr-form" onSubmit={manejarEnvio}>
                        <input type="text" placeholder="Nombre Completo" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                        <input type="email" placeholder="Correo Electronico" value={correo} onChange={(e)=> setCorreo(e.target.value)} />
                        <select value={tipo} onChange={(e)=> setTipo(e.target.value)}>
                            <option value="">Tipo de solicitud</option>
                            <option value="Peticion">Petición</option>
                            <option value="Queja">Queja</option>
                            <option value="Reclamo">Reclamo</option>
                        </select>
                        <textarea placeholder="Escribe tu mensaje..." rows="6" maxLength="300" value={mensaje} onChange={(e)=> setMensaje(e.target.value)}></textarea>
                        <p className="contador">{mensaje.length}/300 caracteres</p>
                        <button className="pqr-btn">Enviar Solicitud</button>
                        {
                            enviado &&(
                                <p className="mensaje-exito">Solicitud enviada Correctamente 😎</p>
                            )
                        }
                    </form>
                </div>
            </section>

        )
    }    
export default PQR