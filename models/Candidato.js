import mongoose from 'mongoose';
//const { Schema } = mongoose; se ahorra esta linea al poner new mongoose.Schema

const candidatoSchema = new mongoose.Schema({
  participacion: String,
  nombre: String, // String is shorthand for {type: String}
  partido: String,
  propuestas: String,
  cedula: String,
  fecha: { type: Date, default: Date.now },
  creacion: { type: Date, default: Date.now },
  activa:  { type: Boolean, default: true },
 }); 


 export default mongoose.model("Candidato",candidatoSchema);