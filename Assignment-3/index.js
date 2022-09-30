const fs=require("fs");
const http=require("http")
fs.writeFile("index.html",`<h1>hello World</h1> \n <p>This is Harsha</p>`,(err)=>{
    console.log(err);
})
let text;
fs.readFile('index.html',(err,data)=>{
    text=data;
})

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write(`${text}`)
    res.end();
});
server.listen(5000,()=>{console.log("connecting to server")})