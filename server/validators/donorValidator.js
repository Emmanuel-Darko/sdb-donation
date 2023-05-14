const Joi = require("joi")


//validate when donor registers
const registerValidator = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email({minDomainSegments:2}).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required(),
        repeat_password: Joi.ref('password')
    })
    .with('email','password')
    .with('password', 'repeat_password')

    const {email, password, repeat_password} = req.body
    const {error} = schema.validate({email, password, repeat_password})
    if(error){
        console.log(error.details[0].message)
        switch(error.details[0].context.key){
            case 'email' :
                return res.status(400).json('Email must be a valid email')
            case 'password':
                return res.status(400).json('Password must contain at least 6 characters')
            case 'repeat_password':
                return res.status(400).json('Password mismatch')
            default:
                return res.status(400).json('Validation error')
        }
    }

    next()
}


//validate when a donor login
const loginValidator = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email({minDomainSegments:2}).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required(),
    })
    .with('email','password')

    const {email, password} = req.body
    const {error} = schema.validate({email, password})
    if(error){
        console.log(error.details[0].message)
        switch(error.details[0].context.key){
            case 'email' :
                return res.status(400).json('Email must be a valid email')
            case 'password':
                return res.status(400).json('Check email or password')
            default:
                return res.staus(400).json('Validation error')
        }
    }

    next()
}

module.exports = {registerValidator,loginValidator}