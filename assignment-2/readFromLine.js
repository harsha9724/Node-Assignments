const readline=require("readline");
const rl=readline.Interface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Please Enter your Name"+" ",(name)=>{
    console.log(`hello ${name}`);
    rl.close();
})