const {v4:uuidv4} =require("uuid")
const bcrypt = require("bcrypt")

const DonorModel = require("../models/donorModel")

//donor registeration
const registerDonorController = async(req,res)=>{

    //get donor registration info
    const {email, password} = req.body 
    
    //encrypt the password
    const hashPassword = bcrypt.hashSync(password, 12);
    
    //add donor to the database
    const uuid = uuidv4()
    const newDonor = {
        uuid,
        email,
        hashPassword,
        username: ''
    }
    await DonorModel.create(newDonor).then(result => {
        res.status(201).json(`registered sucessfully: ${req.token}`)
        return;
    })
}

//donor login
const loginDonorController =async(req,res)=>{

    //get donor info
    const {email, password} =req.body;
     
    // check if donor exist
     const findUser = await DonorModel.find({email, password})
     if(!findUser){
         return res.status(403).json('User does not exist. Please register!')
     }
    res.status(201).json("login sucessful!");
}

module.exports = {
    registerDonorController,
    loginDonorController
}