/**Representar los datos de las elecciones en mi proyecto*/

import mongoose from 'mongoose';
// const { Schema } = mongoose;

/**Informacion que queremos registrar */
const usuarioSchema = new mongoose.Schema({
  nombre: String, // String is shorthand for {type: String}
  email: {
    type: String, //String
    required: [true, "El correo es requerido"],
    unique: true
  },
  password: {
    type: String, //String
    required: true,
  },
  admin: {type:Boolean, default:false},
},{timestamps:true});

export default mongoose.model("Usuario",usuarioSchema);
