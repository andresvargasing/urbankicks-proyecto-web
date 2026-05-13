import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";

function Productos(){
    const [filtroMarca,setFiltroMarca]=useState("Todos")
    const [filtroCategoria, setFiltroCategoria]=useState("Todos")
    const {agregarAlCarrito}=useContext(CarritoContext); 
    const marcas=[
        "Todos",
        "Nike",
        "Adidas",
        "Puma",
        "Vans",
        "Converse",
        "New Balance"
    ]
    const categorias=[
        "Todos",
        "Hombre",
        "Mujer",
        "Niño"
    ]
    const productos=[
        //Nike
        {
            id:1,
            nombre:"Air Jordan Retro 3",
            marca:"Nike",
            categoria:"Hombre",
            precio:"$ 450.000",
            imagen:"public/img/ZapatosP/nike-1.jpg"
        },
        {
            id:2,
            nombre:"Nike Air Max TL 2.5",
            marca:"Nike",
            categoria:"Mujer",
            precio:"$ 520.000",
            imagen:"public/img/ZapatosP/nike-2.webp"
        },
        {
            id:3,
            nombre:"Nike Court Borough Mid 2",
            marca:"Nike",
            categoria:"Niño",
            precio:"$ 90.000",
            imagen:"public/img/ZapatosP/nike-3.webp"
        },
        {
            id:4,
            nombre:"Nike Dunk Low",
            marca:"Nike",
            categoria:"Hombre",
            precio:"$ 490.000",
            imagen:"public/img/ZapatosP/nike-4.webp"
        },
        //Adidas
        {
            id:5,
            nombre:"Adidas Forum Mid",
            marca:"Adidas",
            categoria:"Hombre",
            precio:"$ 390.000",
            imagen:"public/img/ZapatosP/adi-1.1.avif"
        },
        {
            id:6,
            nombre:"Tenis SL72 OG",
            marca:"Adidas",
            categoria:"Mujer",
            precio:"$ 420.000",
            imagen:"public/img/ZapatosP/adi-2.avif"
        },
        {
            id:7,
            nombre:"Tesaur sport 3.0 (Niños)",
            marca:"Adidas",
            categoria:"Niño",
            precio:"$ 66.000",
            imagen:"public/img/ZapatosP/adi-3.avif"
        },
        {
            id:8,
            nombre:"Adidas Yeezy",
            marca:"Adidas",
            categoria:"Hombre",
            precio:"$ 850.000",
            imagen:"public/img/ZapatosP/adi-4.webp"
        },
        //Puma
        {
            id:9,
            nombre:"Tenis Speedcat OG",
            marca:"Puma",
            categoria:"Hombre",
            precio:"$ 450.000",
            imagen:"public/img/ZapatosP/puma-1.avif"
        },
        {
            id:10,
            nombre:"Tenis Pacer Future Street",
            marca:"Puma",
            categoria:"Mujer",
            precio:"$ 150.000",
            imagen:"public/img/ZapatosP/puma-2.avif"
        },
        {
            id:11,
            nombre:"Puma H-Street OG",
            marca:"Puma",
            categoria:"Niño",
            precio:"$ 75.000",
            imagen:"public/img/ZapatosP/puma-3.avif"
        },
        {
            id:12,
            nombre:"Puma RS-X",
            marca:"Puma",
            categoria:"Hombre",
            precio:"$ 370.000",
            imagen:"public/img/ZapatosP/puma-4.avif"
        },
        //Vans
        {
            id:13,
            nombre:"Vans Old skool",
            marca:"Vans",
            categoria:"Hombre",
            precio:"$ 260.000",
            imagen:"public/img/ZapatosP/vans-1.avif"
        },
        {
            id:14,
            nombre:"Classic slip-On Checkerboard",
            marca:"Vans",
            categoria:"Mujer",
            precio:"$ 260.000",
            imagen:"public/img/ZapatosP/vans-2.avif"
        },
        {
            id:15,
            nombre:"Old Skool V Shoe (Niños)",
            marca:"Vans",
            categoria:"Niño",
            precio:"$ 260.000",
            imagen:"public/img/ZapatosP/vans-3.avif"
        },
        {
            id:16,
            nombre:"Vans Urban",
            marca:"Vans",
            categoria:"Hombre",
            precio:"$ 320.000",
            imagen:"public/img/ZapatosP/vans-4.avif"
        },
        //Converse
        {
            id:17,
            nombre:"chuck 70 Vintage Canvas",
            marca:"Converse",
            categoria:"Hombre",
            precio:"$ 95.000",
            imagen:"public/img/ZapatosP/con-1.jpg"
        },
        {
            id:18,
            nombre:"Chuck Taylor All Star",
            marca:"Converse",
            categoria:"Mujer",
            precio:"$ 350.000",
            imagen:"public/img/ZapatosP/con-2.jpg"
        },
        {
            id:19,
            nombre:"Chuck Taylor All Star Malden Street Easy-On Color Pop",
            marca:"Converse",
            categoria:"Niño", 
            precio:"$ 45.000",
            imagen:"public/img/ZapatosP/con-3.jpg"
        },
        {
            id:20,
            nombre:"SHAI 001",
            marca:"Converse",
            categoria:"Hombre",
            precio:"$ 130.000",
            imagen:"public/img/ZapatosP/con-4.webp"
        },
        //New Balance
        {
            id:21,
            nombre:"new Balance 550",
            marca:"New Balance",
            categoria:"Hombre",
            precio:"$ 470.000",
            imagen:"public/img/ZapatosP/nb-1.webp"
        },
        {
            id:22,
            nombre:"Women's 373 V2",
            marca:"New Balance",
            categoria:"Mujer",
            precio:"$ 449.900",
            imagen:"public/img/ZapatosP/nb-2.webp"
        },
        {
            id:23,
            nombre:"Pre School 480",
            marca:"New Balance",
            categoria:"Niño",
            precio:"$ 286.930",
            imagen:"public/img/ZapatosP/nb-3.webp"
        },
        {
            id:24,
            nombre:"Fresh Foam Arishi V4",
            marca:"New Balance",
            categoria:"Hombre",
            precio:"$ 416.900",
            imagen:"public/img/ZapatosP/nb-4.webp"
        }
    ]
    return(
        <section className="productos-page">
            <div className="section-content">
                <h2 className="section-title">Nuestros Productos</h2>

                {/*filtros Marcas*/}
                <div className="filtros-container">
                    {marcas.map((marca)=>(
                        <button
                            key={marca}
                            className="filtro-btn"
                            onClick={()=>setFiltroMarca(marca)}>
                            {marca}
                        </button>
                    ))}
                </div>

                {/*filtro Categorias*/}
                <div className="filtros-container">
                    {categorias.map((categoria)=>(
                        <button
                            key={categoria}
                            className="filtro-btn"
                            onClick={()=>setFiltroCategoria(categoria)}>
                            {categoria}
                        </button>
                    ))}
                </div>

                <h3 className="filtro-titulo">
                    {filtroMarca==="Todos" && filtroCategoria==="todos"?"Todos los zapatos":`Zapatos ${
                        filtroMarca !== "Todos"?filtroMarca:""}${
                            filtroCategoria !== "Todos"
                            ?` para ${filtroCategoria}`:""
                    }`
                    }
                </h3>

                {/*productos*/}
                <div className="productos-container">
                    {productos.filter((producto)=>{
                        const coincideMarca = filtroMarca==="Todos"||producto.marca===filtroMarca;
                        const coincideCategoria = filtroCategoria==="Todos"||producto.categoria===filtroCategoria;
                        return coincideMarca && coincideCategoria;
                    })
                    .map((producto)=>(
                        <div className="producto-card" key={producto.id}>
                            <img src={producto.imagen} alt={producto.nombre}
                            className="producto-img"/>
                            <h3 className="producto-name">
                                {producto.nombre}</h3>
                            <p className="producto-price">
                                {producto.precio}
                            </p>
                            <button className="producto-btn" onClick={()=>agregarAlCarrito(producto)}>
                                Agregar 
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Productos