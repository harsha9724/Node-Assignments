const express=require("express");


const app=express();
const blogrouter=require("./routes/blog");
app.use("/blog",blogrouter);

app.listen(5000,()=>{
    console.log("connecting to port 5000")
})