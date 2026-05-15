import Slider from "../components/Slider";

function Home(){
    return(
        <div>
        <section className="hero-section">
            <div className="hero-img left-ing">
                <img src="public/img/fashion-shoes-sneakers.png" alt="zapato-isq" />
            </div>
            <div className="hero-content">
                <h1 className="hero-title">Urban Kicks</h1>
                <h2 className="hero-subtitle">Lleva tu estilo al siguiente nivel</h2>
                <p className="hero-description">Las mejores zapatillas urbanas con comodidad, estilo y exclusividad.</p>
                <button className="hero-button">Comprar ahora</button>
            </div>
            <div className="hero-img right-ing">
                <img src="public/img/zapatos verdes2.png" alt="zapato-derecho" />
            </div>
        </section>
        <Slider/>
        {/*productos destacados*/}
        <section className="destacados-section">
            <h2 className="section-title">Productos Destacados</h2>
            <div className="p-container">
                <div className="p-card">
                    <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="zapato" />
                    <h3>Nike Jordan</h3>
                    <p>$ 450.000</p>
                    <button>Comprar</button>
                </div>
                <div className="p-card">
                    <img src="https://images.unsplash.com/photo-1558191053-c03db2757e3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="zapato" />
                    <h3>Adidas Blancas</h3>
                    <p>$ 380.000</p>
                    <button>Comprar</button>
                </div>
                <div className="p-card">
                    <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="zapato" />
                    <h3>Puma smash V2</h3>
                    <p>$ 285.000</p>
                    <button>Comprar</button>
                </div>
                <div className="p-card">
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="zapato" />
                    <h3>Nike free RN 2017</h3>
                    <p>$ 200.000</p>
                    <button>Comprar</button>
                </div>
                <div className="p-card">
                    <img src="https://images.unsplash.com/photo-1620794341491-76be6eeb6946?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="zapato" />
                    <h3>Adidas Forum Low</h3>
                    <p>$ 300.000</p>
                    <button>Comprar</button>
                </div>
            </div>
        </section>
        {/*Beneficios*/}
        <section className="beneficios-section">
            <h2 className="section-title">Porque elegir UrbanKicks?</h2>
            <div className="beneficios-container">
                <div className="card-beneficios">Envios Rapidos</div>
                <div className="card-beneficios">Pagos seguros</div>
                <div className="card-beneficios">Calidad premium</div>
            </div>
        </section>
        </div>
    )
}
export default Home