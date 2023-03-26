const express=require("express");
const bodyParser=require("body-parser");

const dotenv=require("dotenv")
dotenv.config()

const PORT=5000
const studentRouter=require('./routes/student')

const app=express()


app.use(bodyParser.json())
app.use(studentRouter)


app.listen(process.env.PORT,()=>{
    console.log(`Server is starting on the port no ${PORT}`)
})