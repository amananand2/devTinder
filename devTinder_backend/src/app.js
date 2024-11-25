const express = require("express");
const app = express();

app.use("/test",(req,res)=>{
    res.send("hello world chrck...")
})

app.listen(7777,()=>{
    console.log("server is succesfully listening on port 7777")
})