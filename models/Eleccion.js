/**Representar los datos de las elecciones en mi proyecto*/

import mongoose from 'mongoose';
// const { Schema } = mongoose;

/**Informacion que queremos registrar */
const eleccionSchema = new mongoose.Schema({
  titulo: String, // String is shorthand for {type: String}
  descripcion: String,
  fecha: { type: Date, default: Date.now },
  creacion: { type: Date, default: Date.now },
  activa: { type: Boolean, default: true },
});

export default mongoose.model("Eleccion",eleccionSchema);
