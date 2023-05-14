const Joi = require("joi")

const donateValidator = (req, res, next) =>{
  const schema = Joi.object({
    title: Joi.string().min(5).required(),
    description: Joi.string().min(5).required(),
    amount: Joi.number().min(1).required(),
    image: Joi.allow()
  })
  .with("donorId", "receipintId")

  const {title, description, amount, image} =req.body
  const{error} = schema.validate({title, description, amount, image})
  if(error){
    console.log(error)
    res.status(404).json("validation failed");
  }

  next();
}

module.exports = {donateValidator};