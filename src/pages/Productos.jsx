import { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";

function Productos() {

    const { agregarAlCarrito } = useContext(CarritoContext);

    const [filtroMarca, setFiltroMarca] = useState("Todos");
    const [filtroCategoria, setFiltroCategoria] = useState("Todos");
    const [busqueda, setBusqueda] = useState("");
    const [productos, setProductos] = useState([]);

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

    useEffect(() => {

        fetch("http://localhost:3000/productos")
            .then((res) => res.json())
            .then((data) => {

                console.log("PRODUCTOS DESDE API:");
                console.log(data);
                console.log("CANTIDAD:", data.length);

                setProductos(data);

            })
            .catch((err) => console.error(err));

    }, []);

    console.log("ESTADO PRODUCTOS:");
    console.log(productos);
    console.log("TOTAL EN ESTADO:", productos.length);

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

                            <div
                                className="producto-card"
                                key={producto.id}
                            >

                                <img
                                    src={producto.imagen_url}
                                    alt={producto.nombre}
                                    className="producto-img"
                                />

                                <h3 className="producto-name">
                                    {producto.nombre}
                                </h3>

                                <p className="producto-price">
                                    ${producto.precio}
                                </p>

                                <button
                                    className="producto-btn"
                                    onClick={() =>
                                        agregarAlCarrito(producto)
                                    }
                                >
                                    Agregar
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