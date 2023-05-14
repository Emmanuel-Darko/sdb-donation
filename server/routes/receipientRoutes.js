const express = require("express")
const router = express.Router()

const {registerReceipientValidator, loginReceipientValidator} = require("../validators/receipientValidator")
const {registerReceipientMiddleware, loginReceipientMiddleware} = require("../middlewares/authMiddleware")
const {registerReceipientController, loginReceipientController} = require("../controllers/receipientController")


router.post("/register", registerReceipientValidator,registerReceipientMiddleware, registerReceipientController)
router.post("/login", loginReceipientValidator,loginReceipientMiddleware, loginReceipientController)


module.exports=router