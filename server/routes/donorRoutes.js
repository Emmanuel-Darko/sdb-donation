const express = require("express")
const router = express.Router()
const {
    registerDonorController, 
    loginDonorController
} = require("../controllers/donorController")

const {loginValidator,registerValidator} = require("../validators/donorValidator")
const { generateTokenMiddleware } = require("../middleware/authMiddleware")


router.post("/register", registerValidator,generateTokenMiddleware, registerDonorController)
router.post("/login", loginValidator,generateTokenMiddleware, loginDonorController)



module.exports=router