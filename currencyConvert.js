// Question : Write a nodejs application to convert the currency from one currency to 
// another using package: currency-converter-lt

const http = require('http')
const CC = require('currency-converter-lt')

// let currencyConverter = new CC({from:"USD", to:"JPY", amount:100})

// currencyConverter.convert().then((response) => {
//     console.log(response)
// })

http.createServer((req, res) => {
    let currencyConverter = new CC({from:"USD", to:"NPR", amount:200})
    currencyConverter.convert().then((response) => {
        res.writeHead(200, {"content-type":"text/html"}); // html tag
        res.write(`<h1>USD to NPR</h1>${response}`); // body
        res.end();
        console.log(response)
    })
}).listen(5555)

console.log('App is running on port 5555')