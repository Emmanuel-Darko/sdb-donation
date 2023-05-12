const Joi = require("joi")

const registerReceipientValidator = (req,res, next)=>{
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().min(6).required(),
        repeat_password: Joi.ref("password"),
        cause: Joi.string().required(),
        size: Joi.number().required(),
        location: Joi.string().required()
    })
    .with('email','password')
    .with('password', 'repeat_password')

    const {name, email, password, repeat_password, cause, size, location} = req.body
    const {error} = schema.validate({name, email, password, repeat_password, cause, size, location})
    if(error){
        // console.log(error);
        return res.status(400).json('validation error');
    }
    return next();

}

module.exports = {registerReceipientValidator};
    