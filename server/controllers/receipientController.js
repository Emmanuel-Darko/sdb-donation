const {v4:uuidv4} =require("uuid")
const bcrypt = require("bcrypt")
const ReceipientModel = require("../models/receipientModel")

const registerReceipientController = async(req,res)=>{
    //get receipient info
    const {name, email, password, cause, size, location} = req.body;
    
    //encrypt password
    const hashPassword = bcrypt.hashSync(password,12);

    //add receipient to the database
    const uuid = uuidv4();
    const newReceipient = {
        uuid,
        name,
        email,
        password: hashPassword,
        cause,
        size,
        location
    }

    try {
        await ReceipientModel.create(newReceipient).then(result =>{
            res.status(201).json({
                message: 'Registered successfully',
                token: req.token
            })
        })
    } catch (error) {
        console.log(error)
        res.status(400).json('registeration failed, please try again...')
    }

    return;
}

//receipient login
const loginReceipientController = (req, res) => {
    const token = req.token
    res.status(200).json({message:'login successful', token})
}

module.exports = {registerReceipientController, loginReceipientController}