const DonationsModel = require("../models/donationsModel")
const {v4:uuidv4} =require("uuid")

const createDonationController = async(req,res)=>{
  //get donor info
  const { donorId, receipientId, title, description, amount, image } = req.body;

  const uuid =uuidv4()
  const newDonation = {
    uuid,
    donorId,
    receipientId,
    title,
    description,
    amount,
    image
  }
  await DonationsModel.create(newDonation)
  res.status(201).json("donation made sucessfully! Thank you for your benevolence")
}


module.exports = createDonationController