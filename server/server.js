const e = require('express');
const express = require('express');

const app = express();

const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Hello World server");
})

app.get("/name",(req,res)=>{
    res.send("Madhu Dhilip");
})

app.listen(PORT,()=>{
console.log("Server is running on port :",PORT);
})