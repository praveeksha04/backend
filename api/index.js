
const express=require("express")
const app=express()
 const {router}=require("../routes/route")
 const cors = require('cors');

require('dotenv').config()
const connectDB=require('../connect/connect')

 app.use(cors())
app.use('/api/v1',router)

const start =async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(5000,()=>{
    console.log("listening at port 5000")
})
    } catch (error) {
       console.log("db is not connected");
    }
}

start()
