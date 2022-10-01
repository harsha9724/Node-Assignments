const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.post("/add",(req,res)=>{
    let num1=req.body.num1;
    let num2=req.body.num2;
    let sum=num1+num2;
    res.json({
        "status":"succes",
        "sum":sum
    })
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;