const input=require("./index");
// creating file
input.myFileWriter("file3.txt","hello ").then((data)=>{
    // console.log(data)
}).catch((err)=>{
    // console.log(err)
});
// reading file data
 console.log(input.myFileReader("index.js").then((data)=>{
    console.log(data)
}).catch((err)=>{
    // console.log(err)
}));

// updating file data
input.myFileUpdater("file1.txt","this is appending text");

// deleting file

input.myFileDeleter("file3.txt");

