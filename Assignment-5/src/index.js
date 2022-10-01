var http = require("http");

const httpServer = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(300,{"content-type":"text/html"})
        res.write("<a href=/welcome>go to welcome page</a>");
        res.end();
    }
    if(req.url=="/welcome"){
        res.writeHead(300,{"content-type":"text/html"})
        res.write("<h1>welcome to Dominose</h1>");
        res.write("<a href=/contact>contact us</a>");
        res.end();
    }
    if(req.url=="/contact"){
        res.writeHead(200,{"content-type":"text/json"});
        res.write(JSON.stringify({
            "phone": '18602100000', 
             "email": 'guestcaredominos@jublfood.com' 
        }))
        res.end();
    }
    else{
        res.writeHead(404);
        res.end("error page not found")
    }
});



httpServer.listen(9000,()=>{
    console.log("connecting to server")
})

module.exports = httpServer;