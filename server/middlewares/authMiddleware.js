// const users = require('../models/user') //array option
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {v4:uuidv4} = require('uuid')
const DonorModel = require('../models/donorModel')
const ReceipientModel = require('../models/receipientModel')
const jwtSecret = process.env.JWT_SECRET


// ********************Register and Login Donor Middlware**********************
const registerDonorMiddleware = async(req, res, next) => {
    const { email } = req.body
    const foundUser = await DonorModel.findOne({email}).exec()
    if(foundUser)
        return res.status(404).json("User already exists, sign in...")

    if(!foundUser){
        const uuid = uuidv4()
        const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60), //expires in 1 hour
                uuid, // uuid to be signed
            },
            jwtSecret // private key
        )
        req.user = {token, uuid}
        next()
    }
}
const loginDonorMiddleware = async(req, res, next) => {
    const { email, password } = req.body
    const foundUser = await DonorModel.findOne({email}).exec()
    if(!foundUser)
        return res.status(400).json('User does not exist consider signing up...')
    
    const comparePass = bcrypt.compareSync(password, foundUser.password)

    if(!comparePass)
        return res.status(404).json('Check email or password...')
    
    const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60), //expires in 1 hour
            uuid: foundUser.uuid, // uuid to be signed
        },
        jwtSecret // private key
    )
    req.token = token
    next()
}


// ********************Register and Login Receipient Middlware**********************
const registerReceipientMiddleware = async(req, res, next) => {
    const { email } = req.body
    const foundUser = await ReceipientModel.findOne({email}).exec()
    if(foundUser)
        return res.status(404).json("Receipient already exists, sign in...")

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
const loginReceipientMiddleware = async(req, res, next) => {
    const { email, password } = req.body
    const foundUser = await ReceipientModel.findOne({email}).exec()
    if(!foundUser)
        return res.status(400).json('Receipient does not exist consider signing up...')
    
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


// ********************Verify User Middlware**********************
const verifyUserMiddleware = (req, res, next) => {
    const {usertoken} = req.headers
    jwt.verify(usertoken, jwtSecret, (err, decoded) => {
        if(err){
            console.log(err)
            return res.status(404).json('session expired, please login...')
        }
        req.uuid = decoded.uuid
        next()
    })
}

module.exports = {
    registerDonorMiddleware, loginDonorMiddleware,
    registerReceipientMiddleware, loginReceipientMiddleware,
    verifyUserMiddleware
}