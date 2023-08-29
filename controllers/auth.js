import Usuario from "../models/Usuario.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**regsitro usurio */
export const register = async  (req,res,next) => {
    try {
        const salt = bcrypt.genSaltSync(10); /** contraseña incriptada */
        const newPass = bcrypt.hashSync(req.body.password, salt);
        
        const newUser = new Usuario({
            nombre: req.body.nombre,
            email: req.body.email,
            admin: req.body.admin,
            password: newPass,
        });
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        next(new Error("No se logró registrar"));
    }
}

/**login usuario */
export const login = async  (req,res,next) => {
    try {
        const user = await Usuario.findOne({
            email : req.body.email
        })
        if(!user) res.status(400).json({"message":"Usuario no encontrado"}) 
        const ispasswordCorrect = await bcrypt.compare(req.body.password,user.password)/**comparando las peticion con lo que ay esta en el base de datos */
        if(!ispasswordCorrect) res.status(400).json({"message":"Datos de acceso incorrecto"})

        /**Generando token dentro del sistema */
        const token = jwt.sign({ id:user._id, email:user.email, admin:user.admin }, process.env.JWT);

        /**extraer la informacion y lo demas parsarlo a otra variable osea a other */
        const {password, createdAt, updatedAt, ...other} = user._doc
        /**  extraer estos campos password, createdAt, updatedAt 
         * y los demas osea los que visualizo pasarlo a other  */

        res.cookie("access_token",token,{
            httpOnly: true //para enviar que si el fronedn acceda al cookie javascript
        }).status(200).json({...other, token}) // token asi devuekve ek token 
    } catch (err) {
         res.status(500).json({"erro":"Nose logró"});
    }
}