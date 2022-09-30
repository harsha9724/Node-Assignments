const express=require("express");
var bodyParser = require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
  
app.get("/",(req,res)=>{
    res.send("hello world");
})

app.post("/add",(req,res)=>{
    let num1 =+ req.body.num1;
    let num2=+ req.body.num2;
    var status="success"
    let message="the sum of given two numbers"
  if(isNaN(num1)|| isNaN(num2)){
    status="failure"
    message="Invalid data types"
  }
   
    var result=num1+num2
    if(num1<-1000000 || num2 < -1000000 || (num1+num2) < -1000000){
        result="Underflow"
    }
    if(num1>1000000 || num2 > 1000000 || (num1+num2) > 1000000){
        result="Overflow"
    }
    res.json({
       "status":status,
       "message": message,
       "sum": result   
    })
})
app.post("/sub",(req,res)=>{
    let num1 =+ req.body.num1;
    let num2=+ req.body.num2;
    var status="success"
    let message="the difference of given two numbers"
    if(isNaN(num1)|| isNaN(num2)){
        status="failure"
      message="Invalid data types"
    }
    
    var result=num1-num2
    if(num1<-1000000 || num2 < -1000000 || (num1-num2) < -1000000){
        result="Underflow"
    }
    if(num1>1000000 || num2 > 1000000 || (num1-num2) > 1000000){
        result="Overflow"
    }
    res.json({
       "status":status,
       "message":message,
       "difference": result   
    })
})
app.post("/multiply",(req,res)=>{
    let num1 =+ req.body.num1;
    let num2=+ req.body.num2;
    var status="success"
    let message="the product of given two numbers"
    if(isNaN(num1)|| isNaN(num2)){
      message="Invalid data types"
      status="failure"
    }
    var result=num1*num2
    if(num1<-1000000 || num2 < -1000000 || (num1*num2) < -1000000){
        result="Underflow"
    }
    if(num1>1000000 || num2 > 1000000 || (num1*num2) > 1000000){
        result="Overflow"
    }
    res.json({
       "status":status,
       "message":message,
       "result": result  
    })
})
app.post("/divide",(req,res)=>{
    let num1 =+ req.body.num1;
    let num2=+ req.body.num2;
    var status="success"
    let message="the division of given two numbers"
    if(isNaN(num1)|| isNaN(num2)){
      message="Invalid data types"
      status="failure"
    }
   
    if(num2==0){
        status="error"
    }
    res.json({
       "status":status,
       "message": message,
       "result": num1/num2  
    })
})



app.listen(9000,()=>{
    console.log("connecting to server")
})