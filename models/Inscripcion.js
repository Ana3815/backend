import mongoose from 'mongoose';
//const { Schema } = mongoose; se ahorra esta linea al poner new mongoose.Schema

const inscripcionSchema = new mongoose.Schema({
  nombre: String,
  cedula:String, // String is shorthand for {type: String}
  nacionalidad:String,
  fecha: { type: Date, default: Date.now },
  creacion: { type: Date, default: Date.now },
  activa:  { type: Boolean, default: true },
 }); 


 export default mongoose.model("Inscripcion",inscripcionSchema);