const express = require("express")

const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({message:"user service is running"})
})

app.get("/users",(req,res)=>{
    res.json({message:"User service api is working"})
})

const PORT = 3000

app.listen(PORT,()=> console.log(`User service is running on port ${PORT}`))