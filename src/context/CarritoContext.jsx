import {createContext, useState, useEffect} from "react";

export const CarritoContext = createContext();

function CarritoProvider({children}){
    const [carrito, setCarrito]= useState(()=> {
        //carrito guardado
        const carritoGuardado = localStorage.getItem("carrito");
        //Agregar Producto
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });
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
    //guardad carrito auto 
    useEffect(()=>{
        localStorage.setItem("carrito", JSON.stringify(carrito));
    },[carrito]);

    return(
        <CarritoContext.Provider value={
            {
                carrito, setCarrito, agregarAlCarrito, eliminarDelCarrito
            }
        }>
            {children}
        </CarritoContext.Provider>
    );
}
export default CarritoProvider;