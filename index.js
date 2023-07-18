const express = require('express');
const app = express();
const mysql = require('mysql')
const cors = require('cors')

app.listen(3002,()=>{
    console.log('server startend')
})

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ejemplo2"
})

app.get('/',(req,res)=>{
    db.query('select * from fruta',
        (err, result)=>{
            if(err)console.log(err)
        else {
            res.send(result)
            console.log("Método Get", result)
        }
        })
})

app.post("/create", (req,res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const imagen = req.body.imagen;

    db.query('INSERT INTO fruta VALUES (?,?,?)', [id,nombre,imagen],
    (err,result)=>{
        if(err)console.log(err)
        else {
            res.send("Fruta registrado con éxito!!")
            console.log("Fruta registrado con éxito!!")
        }

    });
})