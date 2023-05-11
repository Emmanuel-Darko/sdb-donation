const {v4:uuidv4} =require("uuid")
const bcrypt = require("bcrypt")
const DonorModel = require("../models/donorModel")

//register a donor
const registerDonorController = async(req,res)=>{
    const {email, password} = req.body 
    const hashPassword = bcrypt.hashSync(password, 12);
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

module.exports = {registerDonorController}