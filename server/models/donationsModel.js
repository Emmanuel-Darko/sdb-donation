const mongoose = require("mongoose")

const donationsSchema = new mongoose.Schema({
    uuid:{type: String, required:true},
    donorid:{type: String, required:true},
    receipientid:{type: String, required:true},
    image:{type: String, required:false},
    title:{type: String, required:true},
    description:{type: String, required:true},
    amount:{type: String, required:true}

})

const DonationsModel = mongoose.model("DonationsModel", donationsSchema)
module.exports = DonationsModel