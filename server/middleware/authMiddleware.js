// const users = require('../models/user') //array option
const DonorModel = require('../models/donorModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const jwtSecret = process.env.JWT_SECRET

const registerMiddleware = async(req, res, next) => {
    const { email } = req.body
    const foundUser = await DonorModel.findOne({email}).exec()
    if(foundUser)
        return res.status(404).json("User already exists, sign in...")

    if(!foundUser){
        const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60), //expires in 1 hour
                email, // email to be signed
            },
            jwtSecret // private key
        )
        req.token = token
        next()
    }
}


const loginMiddleware = async(req, res, next) => {
    const { email, password } = req.body
    const foundUser = await DonorModel.findOne({email}).exec()
    if(!foundUser)
        return res.status(400).json('User does not exist consider signing up...')
    
    const comparePass = bcrypt.compareSync(password, foundUser.password)

    if(!comparePass)
        return res.status(404).json('Check email or password...')
    
    const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60), //expires in 1 hour
            email, // email to be signed
        },
        jwtSecret // private key
    )
    req.token = token
    next()
}

const verifyUserMiddleware = (req, res, next) => {
    const {usertoken} = req.headers
    jwt.verify(usertoken, jwtSecret, (err, decoded) => {
        if(err){
            console.log(err)
            return res.status(404).json('session expired, please login...')
        }
        req.decodedEmail = decoded.email
        next()
    })
}

module.exports = {
    registerMiddleware,
    loginMiddleware,
    verifyUserMiddleware
}