import { useEffect, useState } from "react";

function Slider(){
    const slides = [
        {
            imagen:"/img/Slides/slides-1.jpg",
            titulo:"Urban Style",
            texto:"Los mejores tenis urbanos"
        },
        {
            imagen:"/img/Slides/slides-2.jpg",
            titulo:"Descuentos",
            texto:"Hasta 50% OFF"
        },
        {
            imagen:"/img/Slides/slides-3.jpg",
            titulo:"Deportivos",
            texto:"descubre los nuevos modelos"
        },
        {
            imagen:"/img/Slides/slides-4.jpg",
            titulo:"UrbanKicks",
            texto:"Comodidad y Estilo"
        },
        {
            imagen:"public/img/Slides/slides-5.jpg",
            titulo:"UrbanKicks",
            texto:"Elegancia a bajo costo"
        }
    ];
    const [slideActual, setSlideActual] = useState(0);
    useEffect(()=> {
        const intervalo = setInterval(()=>{
            setSlideActual((prev)=> prev === slides.length - 1 ? 0 : prev+1);
        }, 3000);
        return ()=> clearInterval(intervalo);
    }, []);
    return(
        <section className="slider-section">
            {
                slides.map((slide,index)=> (
                    <div key={index} className={index===slideActual ?"slide active" :"slide"} >
                        <img src={slide.imagen} alt={slide.titulo}/>
                        <div className="slide-content">
                            <h2>{slide.titulo}</h2>
                            <p>{slide.texto}</p>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}
export default Slider