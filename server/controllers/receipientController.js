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
    console.log(newReceipient);
    await ReceipientModel.create(newReceipient).then(result => {
        if(result){
            console.log(result)
            res.status(201).json(`registered sucessfully: ${req.token}`)
        }
    })
    return;
}

//receipient login


module.exports = {registerReceipientController}