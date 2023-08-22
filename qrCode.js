//  Generate QR Code for the url on the terminal using package qrcode.

var QRCode = require('qrcode')

QRCode.toString('I am a pony!', {type:'terminal'}, function (err, url) {
  console.log(url)
})