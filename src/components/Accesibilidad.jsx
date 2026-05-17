import { useState } from "react";

function Accesibilidad(){
    const [fontSize, setFontSize] = useState(100);
    const aumentarTexto = ()=> {
        setFontSize((prev)=> {
            const nuevoSize = prev +5;
            document.documentElement.style.fontSize = `${nuevoSize}%`;
            return nuevoSize;
        });
    };
    const disminuirTexto = ()=> {
        setFontSize((prev)=>{
            const nuevoSize = prev -5;
            document.documentElement.style.fontSize = `${nuevoSize}%`;
            return nuevoSize;
        });
    };
    const modoOscuro = ()=> {
        document.body.classList.toggle("dark-mode");
    };
    return(
        <div className="Accesibilidad">
            <button onClick={modoOscuro}>🌙</button>
            <button onClick={aumentarTexto}>A+</button>
            <button onClick={disminuirTexto}>a-</button>
        </div>
    )
}
export default Accesibilidad;