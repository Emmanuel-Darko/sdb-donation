const express = require("express")
const router = express.Router()

const {donateValidator} = require("../validators/donationsValidator")
const createDonationController = require("../controllers/donationsController")



router.post("/donate", donateValidator,createDonationController)
// router.get("/allDonations", donateValidator, donationsMiddleware,donationsController)
// router.get("/OneUserDonations/:id", donateValidator,donationsMiddleware, donationsController)

module.exports = router