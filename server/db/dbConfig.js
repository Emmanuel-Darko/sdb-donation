const mongoose = require('mongoose')

const dbConnect = async() =>{
    const connection = await mongoose.connect('mongodb://127.0.0.1/blogdb')
    if(connection){console.log('database connected successfully...')}
    else{console.log('Error connecting databse...')}
}

module.exports = dbConnect

 