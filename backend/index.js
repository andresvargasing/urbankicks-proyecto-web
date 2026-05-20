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
//Obtener productos de MySQL
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
//elimiar producto MySQL
app.delete("/productos/:id", (req,res)=>{
    const id = req.params.id;
    const sql = "delete from productos where id = ?";
    conexion.query(sql,[id],(error,resultados)=>{
        if(error){
            console.log(error);
            return res.status(500).json({
                error:"Error eliminando producto"
            });
        }
        res.json({
            mensaje:"Producto eliminado 😎"
        });
    });
});
//Agregar productos MySQL
app.post("/productos", (req, res)=>{
    const {
        nombre, marca, categoria, precio, imagen}=req.body;
    const sql = `insert into productos (nombre, marca, categoria, precio, imagen) values(?,?,?,?,?)`;
    conexion.query(
        sql,[
            nombre, 
            marca, 
            categoria, 
            precio, 
            imagen
        ],
        (error,resultado)=>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    error:"Error agregando producto"
                });
            }
            res.json({
                mensaje:"Producto agregado 😎"
            });
        }
    );
    });

//API Desarrolladores-Equipo de trabajo
app.get("/desarrolladores", (req,res)=>{
    const sql = "select * from desarrolladores";
    conexion.query(sql,(error,resultados)=>{
        if(error){
            console.log(error);
            return res.status(500).json({
                error:"Error obtiniendo desarrolladores"
            });
        }
        res.json(resultados);
    });
});



//confirma puerto del servidor
app.listen(4000, ()=>{
    console.log("Servidor en puerto 4000");
});
