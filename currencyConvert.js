// Question : Write a nodejs application to convert the currency from one currency to 
// another using package: currency-converter-lt

const CC = require('currency-converter-lt')

let currencyConverter = new CC({from:"USD", to:"JPY", amount:100})

currencyConverter.convert().then((response) => {
    console.log(response)
})