const mongoose = require('mongoose')

const donorSchema = new mongoose.Schema({
    uuid: {type: String, required:true},
    email: {type:String, required:true},
    password: {type:String, required: true},
    username: {type: String, default:'', required: false}
})

const DonorModel = mongoose.model('DonorModel', donorSchema)

module.exports = DonorModel