const mongoose = require('mongoose')

const receipientSchema = new mongoose.Schema({
    uuid: {type: String, required:true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    cause: {type: String, required:true},
    size: {type: Number, required:true},
    location: {type: String, required:true}
})


const ReceipientModel = mongoose.model('ReceipientModel', receipientSchema)

module.exports = ReceipientModel
