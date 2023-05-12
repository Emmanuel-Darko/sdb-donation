const express = require("express")
const router = express.Router()

const {registerReceipientController} = require("../controllers/receipientController")
const {registerReceipientValidator} = require("../validators/receipientValidator")
const { registerMiddleware} = require("../middleware/authMiddleware")


router.post("/register", registerReceipientValidator,registerMiddleware, registerReceipientController)
// router.post("/login", loginValidator,loginMiddleware, loginDonorController)



module.exports=router