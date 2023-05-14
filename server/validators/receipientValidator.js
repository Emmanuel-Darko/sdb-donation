const Joi = require("joi")

const registerReceipientValidator = (req,res, next)=>{
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email({minDomainSegments:2}).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required(),
        repeat_password: Joi.ref("password"),
        cause: Joi.string().min(10).required(),
        size: Joi.string().required(),
        location: Joi.string().required()
    })
    .with('email','password')
    .with('password', 'repeat_password')

    const {name, email, password, repeat_password, cause, size, location} = req.body
    const {error} = schema.validate({name, email, password, repeat_password, cause, size, location})
    if(error){
        console.log(error.details[0].message);
        switch(error.details[0].context.key){
            case 'email' :
                return res.status(400).json('Email must be a valid email')
            case 'password':
                return res.status(400).json('Password must contain at least 6 characters')
            case 'repeat_password':
                return res.status(400).json('Password mismatch')
            default:
                return res.status(400).json('Validation error..')
        }
    }
    
    next();
}

const loginReceipientValidator = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email({maxDomainSegments:2}).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required()
    })
    .with('email', 'password')

    const {email, password} = req.body
    const {error} = schema.validate({email, password})
    if(error){
        console.log(error)
        return res.status(400).json('Check email or password')
    }
    next()
}

module.exports = {registerReceipientValidator, loginReceipientValidator};
    