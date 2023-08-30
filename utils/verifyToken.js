/**verificar token  */

import jwt from 'jsonwebtoken'

export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token;
    if(!token){
        debugger;
        console.log(token);
        return res.status(401).json({message:"No Autorizado"})
    }

    jwt.verify(token,process.env.JWT,(err,user) => {
        if(err) return res.status(401).json({message:"Token no válido"})
        // res.status(200).json(user)
        req.user = user 
        next()
    })
}

export const verifyUser = (req,res,next) => {
    verifyToken(req,res, ()=>{
        if(req.user.id === req.params.id || req.user.admin){
            // return res.status(401).json({message:"Puedes realizar cambios"})
            next()
        }else{
            return res.status(403).json({message:"Usuario sin permisos"})
        }
    })
}