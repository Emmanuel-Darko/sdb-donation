const express = require("express")
const router = express.Router()
const {registerDonorController} = require("../controllers/donorController")
const {loginValidator,registerValidator} = require("../validators/donorValidator")
const { generateTokenMiddleware } = require("../middleware/authMiddleware")


router.post("/register", registerValidator,generateTokenMiddleware, registerDonorController)
router.post("/login", loginValidator, (req,res)=>{res.send("login sucessful")})



module.exports=router