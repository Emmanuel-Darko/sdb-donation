const jwt = require("jsonwebtoken")
const DonorModel = require("../models/donorModel")
const jwtSecret = process.env.JWT_SECRET

const generateTokenMiddleware = async(req, res, next) => {
    const {email} = req.body
    const findUser = await DonorModel.find({email})
    console.log(findUser)
    if(findUser.length !== 0){
        return res.status(403).json('User already exists')
    }
    
    jwt.sign(email, jwtSecret, (err, token) => {
        if(err)
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