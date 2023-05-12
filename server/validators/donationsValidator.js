const Joi = require("joi")

const donateValidator = (req, res, next) =>{
  const schema = Joi.object({
    donorId: Joi.string().required(),
    receipientId: Joi.string().required(),
    title: Joi.string().min(5).required(),
    description: Joi.string().min(5).required(),
    amount: Joi.number().min(1).required(),
    image: Joi.string()
  })
  .with("donorId", "receipintId")

  const {donorId, receipientId, title, description, amount, image} =req.body
  const{error} = schema.validate({donorId, receipientId, title, description, amount, image})
  if(error){
    res.status(404).json("validation failed");
    return next();
  }
}

module.exports = {donateValidator};