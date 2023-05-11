const express = require('express')
require('dotenv').config()
const dbConnect = require('./db/dbConfig');

const app = express()
const port = process.env.PORT

dbConnect().then(res=>{
    app.listen(port, ()=>{
        console.log(`server running on port ${port}`)
    })
})