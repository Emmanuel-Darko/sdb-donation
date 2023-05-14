const express = require("express")
const router = express.Router()
const {registerValidator, loginValidator} = require("../validators/donorValidator")
const { donateValidator } = require("../validators/donationsValidator")
const { registerDonorMiddleware, loginDonorMiddleware, verifyUserMiddleware } = require("../middlewares/authMiddleware")
const { registerDonorController, loginDonorController } = require("../controllers/donorController")
const { getReceipientsController, createDonationController, getUserDonationsController } = require("../controllers/donationsController")


router.post("/register", registerValidator,registerDonorMiddleware, registerDonorController)
router.post("/login", loginValidator,loginDonorMiddleware, loginDonorController)
router.get('/getReceipients', verifyUserMiddleware, getReceipientsController)
router.post("/donate", donateValidator, verifyUserMiddleware, createDonationController)
router.get("/userDonations", verifyUserMiddleware, getUserDonationsController)




module.exports=router