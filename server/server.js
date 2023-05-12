const express = require('express')
require('dotenv').config()
const dbConnect = require('./db/dbConfig');
const cors = require('cors')

const app = express()
const port = process.env.PORT

//body parser
app.use(express.json())
app.use(cors())

//importing the routes from the router folder
const donorRoutes = require("./routes/donorRoutes");
const receipientRoutes = require("./routes/receipientRoutes");
const donationsRoutes = require("./routes/donationsRoutes")


///use the imported routes
app.use("/donor",donorRoutes);
app.use("/receipient",receipientRoutes)
app.use("/donations", donationsRoutes)

dbConnect().then(res=>{
    app.listen(port, ()=>{
        console.log(`server running on port ${port}`)
    })
})