const express = require('express')
// const connect=require('./mongooseConfig/mongooseConnect.js')// we write mongose connection here

// require('dotenv').config()
const app=express()
const cors =require('cors')
// const PORT=process.env.PORT;

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>res.send('hello'))

app.listen(8080,async()=>{
// await connect()
console.log(`listening at http://localhost:8080`)})