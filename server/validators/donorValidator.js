const Joi = require("joi")


//validate when donor registers
const registerValidator = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().min(6).required(),
        repeat_password: Joi.ref('password')
    })
    .with('email','password')
    .with('password', 'repeat_password')

    const {email, password, repeat_password} = req.body
    const {error} = schema.validate({email, password, repeat_password})
    if(error)
        return res.status(400).json(error.details[0].message)
    return next()
}


//validate when a donor login
const loginValidator = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().required(),
        password: Joi.string().min(6).required()
    })
    .with('email','password')

    const {email, password} = req.body
    const {error} = schema.validate({email, password})
    if(error)
        return res.status(400).json('validation error')
    return next()
}

module.exports = {registerValidator,loginValidator}