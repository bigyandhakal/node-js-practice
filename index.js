const http = require("http"); // node js inbuilt package
const myModules = require("./myCustomModule"); // using custom module

http.createServer((req, res)=> {
    
    const date = myModules.myDate();
    const time = myModules.myTime();

    res.writeHead(200, {"content-type":"text/html"}); // html tag
    res.write(`<h1>Hello World</h1><p>${date}</p><p>${time}</p>`); // body
    res.end();
    
}).listen(5555)

console.log("App is running on port 5555");
