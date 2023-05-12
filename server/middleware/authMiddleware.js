const jwt = require("jsonwebtoken")
const DonorModel = require("../models/donorModel")
const jwtSecret = process.env.JWT_SECRET

const generateTokenMiddleware = async(req, res, next) => {

    //get donor registration info
    const {email,password} = req.body;

    
    //validate donor info
    if((!email && password)){
        res.status(201).json("email and password required!");
        return;
    }
    
    //generate token 
    jwt.sign(email, jwtSecret, (error, token) => {
        if(error)
            return res.status(400).json('validation error')
        else{
            req.token = token
            next()
        }
    })
}

// const verifyToken = (req,res,next)=>{
//     const token = req.headers.usertoken;
//     if(token){
//      jwt.verify(token,(error,result)=>{
//         if(error){
//             res.status(403).json("cannot verify email")
//             return;
//         }
//         res.status(201).json(result);
//         next;
//      })
     
//     }
// }


module.exports = {generateTokenMiddleware}