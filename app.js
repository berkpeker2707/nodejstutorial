//tutorial
/*const tutorial = require("./tutorial");
console.log(tutorial);
console.log(tutorial.sum(1,3));
*/

//tutorial2 - Event Module
// const EventEmitter = require("events");
// const eventEmitter = new EventEmitter();

// eventEmitter.on("tutorial", (num1, num2) => {
//   console.log(num1 + num2);
// });
// eventEmitter.emit("tutorial", 1, 2);

// class Person extends EventEmitter {
//   constructor(name) {
//     super();
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }
// }
// let pedro = new Person("Pedro");
// let christina = new Person("Christina");
// christina.on("name", ()=>{
//     console.log("my name is " + christina.name);
// })
// pedro.on("name", () => {
//   console.log("my name is " + pedro.name);
// });
// pedro.emit("name");
// christina.emit("name");

//tutorial3 - readline module
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let num1 = Math.floor(Math.random() * 10 + 1);
// let num2 = Math.floor(Math.random() * 10 + 1);
// let ans = num1 + num2;
// rl.question(`What is the ${num1} + ${num2}? \n`, (userInput) => {
//   if (userInput.trim() == ans) {
//     rl.close();
//   } else {
//     rl.setPrompt("Incorrect response, please try again.\n");
//     rl.prompt();
//     rl.on("line", (userInput) => {
//       if (userInput.trim() == ans) rl.close();
//       else {
//         rl.setPrompt(`Your asnwer of ${userInput} is incorrect, try again.\n`);
//         rl.prompt();
//       }
//     });
//   }
// });
// rl.on("close", () => {
//   console.log("Correct!!!");
// });

//tutorial4 - file system module
//const fs = require("fs");
//create a file
// fs.writeFile("example.txt", "this is an example", (err)=>{
//     if(err)
//     console.log(err);
//     else{
//     console.log("file successfully created");
//     fs.readFile("example.txt", "utf8", (err, file) =>{
//         if(err)
//         console.log(err);
//         else
//         console.log(file);
//     });
//     }
// });

// fs.rename("example.txt", "example2.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("successfully renamed the file");
// });

// fs.appendFile("example2.txt", "Some data being appended", (err) => {
//   if (err) console.log(err);
//   else console.log("successfully appended data to file");
// });

// fs.unlink("example2.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("successfully deleted file");
// });

//tutorial5 - file system module 2
// const fs = require("fs");
// fs.mkdir("nodejstutorial", (err) => {
//   if (err) console.log(err);
//   else console.log("folder successfully created");
// });

// fs.rmdir("nodejstutorial", (err)=>{
// if(err)
// console.log(err);
// else
// console.log("successfully deleted folder");
// });

//tutorial6 - readable writable
const fs = require("fs");
// const readStream = fs.createReadStream("./example.txt", "utf8"); //for very large files, we use this. with chunks, it can read like 2gb files.
// const writeStream = fs.createWriteStream("example2.txt.gz");
// readStream.on("data", (chunk)=>{
// writeStream.write(chunk);
// });
//pipes
// readStream.pipe(writeStream);
//pipe chaining
const zlib = require("zlib"); //zlib is a module for compressing files
const gzip = zlib.createGzip(); //transform stream
// const readStream = fs.createReadStream("./example.txt", "utf8"); //for very large files, we use this. with chunks, it can read like 2gb files.
// const writeStream = fs.createWriteStream("example2.txt.gz");
// readStream.pipe(gzip).pipe(writeStream);

const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream("./example.txt.gz"); //for very large files, we use this. with chunks, it can read like 2gb files.
const writeStream = fs.createWriteStream("example3.txt", "utf8");
readStream.pipe(gunzip).pipe(writeStream);