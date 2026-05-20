import { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";

function Productos() {

    const { agregarAlCarrito } = useContext(CarritoContext);

    const [filtroMarca, setFiltroMarca] = useState("Todos");
    const [filtroCategoria, setFiltroCategoria] = useState("Todos");
    const [busqueda, setBusqueda] = useState("");
    const [productos, setProductos] = useState([]);

    const [nuevoNombre, setNuevoNombre] = useState("");
    const [nuevaMarca, setNuevaMarca] = useState("");
    const [nuevaCategoria, setNuevaCategoria] = useState("");
    const [nuevoPrecio, setNuevoPrecio] = useState("");
    const [nuevaImagen, setNuevaImagen] = useState("");

    const marcas = [
        "Todos",
        "Nike",
        "Adidas",
        "Puma",
        "Vans",
        "Converse",
        "New Balance"
    ];

    const categorias = [
        "Todos",
        "Hombre",
        "Mujer",
        "Niño"
    ];
    //Porductos Backend MySQL
    useEffect(()=>{
        fetch("http://localhost:4000/productos")
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            setProductos(data);
        })
        .catch((err)=>console.log(err));
    },[]);

    //Funcion eliminar de MySQL
    const eliminarProducto = async(id)=>{
        try{
            await fetch(`http://localhost:4000/productos/${id}`,{
                method:"delete"
            });
            const nuevosProductos = productos.filter(
                (producto)=> producto.id !== id
            );
            setProductos(nuevosProductos);
        }catch(error){
            console.log(error);
        }
    };
    //Funcion Añadir de MySQL
    const agregarProducto = async()=>{
        const nuevoProducto = {
            nombre:nuevoNombre,
            marca:nuevaMarca,
            categoria:nuevaCategoria,
            precio:nuevoPrecio,
            imagen:nuevaImagen
        };
        try{
            await fetch("http://localhost:4000/productos", {
                method:"post",
                headers:{
                    "content-Type":"application/json"
                },
                body:JSON.stringify(nuevoProducto)
            });
            const respuesta = await fetch(
                "http://localhost:4000/productos"
            );
            const data = await respuesta.json();
            setProductos(data);
        }catch(error){
            console.log(error);
        }
    };

    return (
        <section className="productos-page">

            <div className="section-content">

                <h2 className="section-title">
                    Nuestros Productos
                </h2>

                {/* filtros marcas */}
                <div className="filtros-container">

                    {marcas.map((marca) => (

                        <button
                            key={marca}
                            className="filtro-btn"
                            onClick={() => setFiltroMarca(marca)}
                        >
                            {marca}
                        </button>

                    ))}

                </div>

                {/* filtros categorias */}
                <div className="filtros-container">

                    {categorias.map((categoria) => (

                        <button
                            key={categoria}
                            className="filtro-btn"
                            onClick={() => setFiltroCategoria(categoria)}
                        >
                            {categoria}
                        </button>
                    ))}
                </div>

                <h3 className="filtro-titulo">

                    {
                        filtroMarca === "Todos" &&
                        filtroCategoria === "Todos"

                            ? "Todos los zapatos"

                            : `Zapatos ${
                                filtroMarca !== "Todos"
                                    ? filtroMarca
                                    : ""
                            }${
                                filtroCategoria !== "Todos"
                                    ? ` para ${filtroCategoria}`
                                    : ""
                            }`
                    }

                </h3>

                {/* buscador */}
                <div className="buscador-container">

                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="buscador-input"
                        value={busqueda}
                        onChange={(e) =>
                            setBusqueda(e.target.value)
                        }
                    />

                </div>

                {/* Formulario-añadir productos */}
                <div className="form-producto">
                    <input type="text" placeholder="Nombre" onChange={(e)=> setNuevoNombre(e.target.value)} />
                    <input type="text" placeholder="Marca" onChange={(e)=> setNuevaMarca(e.target.value)} />
                    <input type="text" placeholder="Categoria" onChange={(e)=> setNuevaCategoria(e.target.value)} />
                    <input type="text" placeholder="Precio" onChange={(e)=> setNuevoPrecio(e.target.value)} />
                    <input type="text" placeholder="Imagen" onChange={(e)=> setNuevaImagen(e.target.value)} />
                    <button onClick={agregarProducto}>Agregar Producto</button>
                </div>
                {/* productos */}
                <div className="productos-container">
                    {productos
                        .filter((producto) => {
                            const coincideMarca =
                                filtroMarca === "Todos" ||
                                producto.marca === filtroMarca;

                            const coincideCategoria =
                                filtroCategoria === "Todos" ||
                                producto.categoria === filtroCategoria;

                            const coincideBusqueda =
                                producto.nombre
                                    .toLowerCase()
                                    .includes(
                                        busqueda.toLowerCase()
                                    );
                            return (
                                coincideMarca &&
                                coincideCategoria &&
                                coincideBusqueda
                            );
                        })
                        .map((producto) => (

                            <div className="producto-card" key={producto.id}>
                                <img src={producto.imagen} alt={producto.nombre} className="producto-img" />
                                <h3 className="producto-name">
                                    {producto.nombre}
                                </h3>
                                <p className="producto-price">
                                    ${producto.precio}
                                </p>
                                <button className="producto-btn" onClick={() => agregarAlCarrito(producto)}>
                                    Agregar
                                </button>
                                <button className="producto-btn" onClick={()=> eliminarProducto(producto.id)}>
                                    Eliminar
                                </button>
                            </div>
                        ))
                    }
                </div>

            </div>

        </section>
    );
}

export default Productos;