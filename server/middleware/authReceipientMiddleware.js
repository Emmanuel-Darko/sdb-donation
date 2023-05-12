const ReceipientModel = require("../models/receipientModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const jwtSecret = process.env.JWT_SECRET

const registerReceipientMiddleware = async(req,res,next)=>{
    const {email} = req.body;
    const foundUser = await ReceipientModel.findOne({email}).exec();
    if(foundUser){
        res.status(400).json("User already exist! Please login");
    }

    if(!foundUser){
        const token =jwt.sign({
            exp: Math.floor(Date.now() / 1000) = (60 * 60),
            email,
        },
        req.token = token,
        next()
        )
    }
}