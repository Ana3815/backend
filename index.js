//const express = require('express')
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser';
/**RUTAS */
import authRouter from './routes/auth.js';
import candidatosRouter from './routes/candidatos.js';
import eleccionesRouter from './routes/elecciones.js';
import ciudadanosRouter from './routes/ciudadanos.js';
import inscripcionesRouter from './routes/inscripciones.js';
import paisesRouter from './routes/paises.js';
import perfilesRouter from './routes/perfiles.js';
import tipoeleccionRouter from './routes/tiposElecciones.js';
import votosRouter from './routes/votos.js';
const app = express()
const port = 3000
dotenv.config()  //acceder a las varibles externaS

app.use(cookieParser())
app.use(express.json())// acepte datos json

const connect = async () =>{
  try {
    const myConn = await mongoose.connect(process.env.MONGO)
    console.log("CAONECTADO A MONGO DB")
  } catch (error) {
    console.log(error)
  }
}

app.get('/', (req, res) => { // las peticiones se reciben a traves de (req, res)
  res.send(`${process.env.TITLE}`)
})

app.use("/api/v1/auth",authRouter);       //todos los archivos de router tienen esta ruta principal
// mi middeworl es use que el es que sabe lo que se recibe y lo que se va a responder 
app.use("/api/v1/candidatos",candidatosRouter);  
app.use("/api/v1/elecciones",eleccionesRouter);  
app.use("/api/v1/ciudadanos",ciudadanosRouter);  
app.use("/api/v1/inscripciones",inscripcionesRouter);  
app.use("/api/v1/paises",paisesRouter);  
app.use("/api/v1/perfiles",perfilesRouter);  
app.use("/api/v1/tipoelecciones",tipoeleccionRouter);  
app.use("/api/v1/votos",votosRouter);  

/** Middleware para verificar token de autentificacion en todas las rutas que requiera */
app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Servidor no disponible"

  return res.status(errorStatus).json({
    message:errorMessage,
    success:false,
    status:errorStatus

  })
})


app.listen(port, () => {
  connect()
  console.log(`Example app listening on port ${port}`)
})
