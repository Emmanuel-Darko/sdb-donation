const mongoose = require("mongoose")

const donationsSchema = new mongoose.schema({
    uuid:{type: String, required:true},
    donorid:{type: String, required:true},
    receipientid:{type: String, required:true},
    image:{type: String, required:false},
    title:{type: String, required:true},
    description:{type: String, required:true},
    amount:{type: String, required:true}

})

const DonationsModel = mongoose.model("DonationsModel", donationsSchema)
moduke.exports = DonationsModel