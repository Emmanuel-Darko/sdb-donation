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
        hashPassword,
        cause,
        size,
        location
    }
    await DonorModel.create(newReceipient).then(result => {
        res.status(201).json(`registered sucessfully: ${req.token}`)
        return;
    })
}

//receipient login