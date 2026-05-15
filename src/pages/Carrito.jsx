import {useContext, useState} from "react";
import {CarritoContext} from "../context/CarritoContext";

function Carrito(){
    const {carrito, eliminarDelCarrito} = useContext(CarritoContext);
    const [mostrarPago, setMostrarPago] = useState(false);
    //Total
    const total = carrito.reduce((acc,producto)=>{
        const precioNumero = Number(
            producto.precio
                .replace("$","")
                .replace(/\./g, "")
                .replace(",","")
                .trim()
        );
        return acc + precioNumero;
    }, 0);
    return(
        <section className="carrito-section">
            <div className="section-content">
                <h2 className="section-title">Carrito de Compras</h2>
                {
                    carrito.length === 0 ?(
                        <p className="carrito-vacio">Tu carrito esta vacio...</p>
                    ):(
                        <div className="carrito-container">
                            {
                                carrito.map((producto, index)=>(
                                    <div className="carrito-card" key={index}>
                                        <img src={producto.imagen} alt={producto.nombre} className="carrito-img"/>
                                        <div className="carrito-info">
                                            <h3>{producto.nombre}</h3>
                                            <p>{producto.precio}</p>
                                            <span>{producto.marca}</span>
                                            <button className="eliminar-btn" onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
                {/*Total*/}
                {
                    carrito.length > 0 && (
                        <div className="carrito-total">
                            <h3>Total:</h3>
                            <p>${total.toLocaleString("es-CO")}</p>
                            <button className="comprar-btn" onClick={() => setMostrarPago(true)}>Finalizar Compra</button>
                        </div>
                    )
                }
            </div>
            {mostrarPago &&(
                <div className="modal-pago">
                    <div className="modal-contenido">
                        <h2>Pasarela de Pago</h2>
                        <form className="form-pago">
                            <input type="text" placeholder="Nombre del titular" required/>
                            <input type="text" placeholder="Numero de tarjeta" maxLength="16" required/>
                            <div className="input-group">
                                <input type="text" placeholder="MM/AA" required/>
                                <input type="text" placeholder="CVV" maxLength="3" required/>
                            </div>
                            <button type="submit" className="pagar-btn">Pagar Ahora</button>
                        </form>
                        <button className="cerrar-btn" onClick={() => setMostrarPago(false)}>X</button>
                    </div>
                </div>
            )
        }
        </section>
    )

}
export default Carrito
