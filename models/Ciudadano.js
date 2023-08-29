import mongoose from 'mongoose';
//const { Schema } = mongoose; se ahorra esta linea al poner new mongoose.Schema

const ciudadanoSchema = new mongoose.Schema({
  nombre: String,
  cedula:String, // String is shorthand for {type: String}
  nacionalidad:String,
  fechaNaci: Date,
  fecha: { type: Date, default: Date.now },
  creacion: { type: Date, default: Date.now },
  activa:  { type: Boolean, default: true },
 }); 


 export default mongoose.model("Ciudadano",ciudadanoSchema);