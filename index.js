const http = require("http"); // node js inbuilt package
const myModules = require("./myCustomModule"); // using custom module
const upperCase = require("upper-case");    // npmjs.com -- install package 

http.createServer((req, res)=> {
    
    const date = myModules.myDate();
    const time = myModules.myTime();
    const message = myModules.msg();
    const myName = upperCase.upperCase("bigyan")

    res.writeHead(200, {"content-type":"text/html"}); // html tag
    res.write(`<h1>Hello World, ${myName}</h1><p>${date}</p><p>${time}</p>${message}`); // body
    res.end();

}).listen(5555)

console.log("App is running on port 5555");
