import { useEffect, useState } from "react";

function Equipo(){
    const [desarrolladores, setDesarrolladores] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:4000/desarrolladores")
        .then((response)=> response.json())
        .then((data)=> setDesarrolladores(data))

    }, []);
    return(
        <section className="equipo-page">
            <div className="section-content">
                <h2 className="section-title">Nuestro equipo</h2>
                <div className="equipo-container">
                    {
                        desarrolladores.map((dev)=>(
                            <div className="equipo-card" key={dev.id}>
                                <img src={dev.foto} alt={dev.nombre} className="equipo-img"/>
                                <h3>{dev.nombre}</h3>
                                <p>{dev.rol}</p>
                                <span>📞{dev.telefono}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Equipo;