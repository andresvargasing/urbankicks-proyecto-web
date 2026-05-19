import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
const conexion = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Avp+2548.",
    database:"urbanKicks"
});

conexion.connect((error)=> {
    if(error){
        console.log("Error conexion", error);
    }else{
        console.log("MySQL conectado 😎");
    }
});

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    
    res.send("Servidor funcionando");
});
app.get("/productos",(req,res)=>{
    const sql = "select * from productos";
    conexion.query(sql,(error,resultados)=>{
        if(error){
            console.log(error);
            return res.status(500).json({
                error:"Error obteniendo productos"
            });
        }
        res.json(resultados);
    });
});
app.post("/productos", (req, res)=>{
    const nuevoProducto = req.body;
    productos.push(nuevoProducto);
    res.json({
        mensaje:"Producto Agregado",
        productos
    });
});

app.listen(4000, ()=>{
    console.log("Servidor en puerto 4000");
});
