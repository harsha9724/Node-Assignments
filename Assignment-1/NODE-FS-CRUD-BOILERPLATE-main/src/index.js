const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(`${fileName}`,`${fileContent}`,(err)=>{
		console.log(err);
	});
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	let a=await fs.readFile(`${fileName}`,{encoding:"utf-8"},(err,data)=>{
		console.log(data);
	});
	return a;
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(`${fileName}`,`\n${fileContent}`)
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(`${fileName}`)
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }