const {v4:uuidv4} =require("uuid")
const bcrypt = require('bcryptjs');
const DonorModel = require("../models/donorModel")

var salt = bcrypt.genSaltSync(10);

//donor registeration
const registerDonorController = async(req, res)=>{
    //get donor registration info
    const {email, password} = req.body
    const {token , uuid} = req.user
    
    //encrypt the password
    const hashPassword = bcrypt.hashSync(password, salt);
    
    //add donor to the database
    const newDonor = {
        uuid,
        email,
        password: hashPassword,
        username: ''
    }
    try {
        await DonorModel.create(newDonor).then(result => 
            res.status(201).json({
                message: 'Registered successfully',
                token: token
            })
        )
    } catch (error) {
        console.log(error)
        res.status(400).json('registeration failed, please try again...')
    }
}

//donor login
const loginDonorController =async(req, res)=>{
    //get donor token
    const token = req.token
    console.log(token);
    res.status(200).json({message:'Login successful', token});
}

module.exports = {
    registerDonorController,
    loginDonorController
}