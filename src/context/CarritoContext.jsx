import {createContext, useState} from "react";

export const CarritoContext = createContext();

function CarritoProvider({children}){
    const [carrito, setCarrito]= useState([]);

    //Agregar Producto
    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };
    //Eliminar Producto
    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter(
            (producto) => producto.id !== id
        );
        setCarrito(nuevoCarrito);
    };
    return(
        <CarritoContext.Provider value={
            {
                carrito,agregarAlCarrito,eliminarDelCarrito
            }
        }>
            {children}
        </CarritoContext.Provider>
    );
}
export default CarritoProvider;