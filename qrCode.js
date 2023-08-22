//  Generate QR Code for the url on the terminal using package qrcode.
const http = require("http");
const QRCode = require("qrcode");

// QRCode.toString('I am a pony!', {type:'terminal'}, function (err, url) {
//   console.log(url)
// })

http
  .createServer((req, res) => {
    var opts = {
      errorCorrectionLevel: "H",
      type: "image/jpeg",
      quality: 0.3,
      margin: 1,
      color: {
        dark: "#010599FF",
        light: "#FFBF60FF",
      },
    };

    QRCode.toDataURL("Node JS qr code", opts, function (err, url) {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(`<h1>This is a qr code</h1><img src="${url}">`);
      res.end();
    });
  })
  .listen(5555);

console.log("App is running on port 5555");
