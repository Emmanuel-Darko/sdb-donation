const DonorModel = require("../models/donorModel")
const {v4:uuidv4} =require("uuid")
const bcrypt = require('bcryptjs')

var salt = bcrypt.genSaltSync(10);

//donor registeration
const registerDonorController = async(req,res)=>{

    //get donor registration info
    const {email, password} = req.body 
    
    //encrypt the password
    const hashPassword = bcrypt.hashSync(password, salt);
    
    //add donor to the database
    const uuid = uuidv4()
    const newDonor = {
        uuid,
        email,
        password: hashPassword,
        username: ''
    }
    console.log(req.token)
    await DonorModel.create(newDonor)
    res.status(201).json(req.token)
}

//donor login
const loginDonorController =async(req,res)=>{

    //get donor token
    const token = req.token
    res.status(200).json(token);
}

module.exports = {
    registerDonorController,
    loginDonorController
}