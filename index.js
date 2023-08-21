const http = require("http"); // node js inbuilt package

http.createServer((req, res)=> {
    res.writeHead(200, {"content-type":"text/html"}); // html tag
    res.write("<h1>Hello World</h1>"); // body
    res.end();
}).listen(5555)

console.log("App is running on port 5555");
