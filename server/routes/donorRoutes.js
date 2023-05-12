const express = require("express")
const router = express.Router()
const {
    registerDonorController, 
    loginDonorController
} = require("../controllers/donorController")

const {loginValidator,registerValidator} = require("../validators/donorValidator")
const { registerMiddleware, loginMiddleware } = require("../middleware/authMiddleware")


router.post("/register", registerValidator,registerMiddleware, registerDonorController)
router.post("/login", loginValidator,loginMiddleware, loginDonorController)



module.exports=router