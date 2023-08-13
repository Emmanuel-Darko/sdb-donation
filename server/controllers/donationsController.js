const {v4:uuidv4} =require("uuid");
const ReceipientModel = require("../models/receipientModel");
const DonorModel = require("../models/donorModel");
const DonationsModel = require("../models/donationsModel");

//get All Receipients
const getReceipientsController = async(req, res)=>{
  try{
    const receipients = await ReceipientModel
    .find({}, "-_id -__v -password").exec()
    console.log('SERVER RES');
    res.status(200).json({message:'successful', data: receipients})
  }catch(e){
    console.log(e)
    res.status(400).json('request failed')
  }
}

//Create donation for user
const createDonationController = async(req,res)=>{
  //get donor info
  const { receipientId, title, description, amount, image } = req.body;
  const donorId = req.uuid // decoded donorId passed through headers from middleware
  const donationsId = uuidv4()    //generates new id for donations
  // const {name} = await ReceipientModel.findOne({receipientId}, "name")

  const newDonation = {
    uuid: donationsId,
    donorId,
    receipientId,
    title,
    description,
    amount,
    image
  }
  await DonationsModel.create(newDonation)
  res.status(201).json({message:'donation made sucessfully! Thank you for your benevolence'})
}


//get all user donations
const getUserDonationsController = async(req, res) => {
  const uuid = req.uuid // decoded donorId passed through headers from middleware
  // const {name} = await ReceipientModel.findOne({receipientId})
  
  if(uuid){
    const userDonations = await DonationsModel.find({donorId: uuid})  //find users donations from allDonations
    if(userDonations)
      return res.status(200).json({data: userDonations})
  }
  else{
    return res.status(400).json('Request error, try again later...')
  }
}


module.exports = {createDonationController, getReceipientsController, getUserDonationsController}