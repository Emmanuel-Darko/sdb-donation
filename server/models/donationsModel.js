const mongoose = require("mongoose")

const donationsSchema = new mongoose.Schema({
    uuid:{type: String, required:true},
    donorId:{type: String, required:true},
    receipientId:{type: String, required:true},
    title:{type: String, required:true},
    description:{type: String, required:true},
    amount:{type: Number, required:true},
    image:{type: String, required:false}
},{
    timestamps: true
})

const DonationsModel = mongoose.model("DonationsModel", donationsSchema)
module.exports = DonationsModel