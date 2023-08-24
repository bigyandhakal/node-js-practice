// send an email using nodemailer package in nodejs

/*
    1. create a nodemailer transporter (SMTP)
    2. create message option
    3. send email using sendMail method of the transporter additional
    4. html page use for email send 
    5. email file attach
    6. personalized email by adding custom
        a. handlebars package
        b. fs package (nodejs inbuilt module)
        c. email template (welcome.html)
        d. using fs, read the email template by method realFileSync("./welcome.html")
        e. convert that buffer to string using .toString()
        f. add the {{ name }} in html file
        g. complie and create template from the code using handlebars.compile(emailString)
        h. add your custom data in the template (const msg = template(data))
        i. use that msg in the messageOptions
*/

const nodemailer = require("nodemailer");
const fs = require("fs");
const Handlebars = require("handlebars");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "dhakalbigyan0@gmail.com",
    pass: "kamkbdadkzxolvhc",
  },
});

transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

const main = async (messageOptions) => {
  const info = await transporter.sendMail(messageOptions);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}

const emailTemplate = fs.readFileSync("./welcome.html");
const emailString = emailTemplate.toString();
const template = Handlebars.compile(emailString);
const data = {name:"Bigyan", companyName:"TechnoAlbedo", address:"Ottawa, Canada"};
const msg = template(data);

const messageOptions = {
    from: '"Bigyan Dhakal 👻" <dhakalbigyan0@gmail.com>', // sender address
    to: "bigyandhakal377@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world, Bigyan Dhakal", // plain text body
    html: msg, // html body
    attachments: [
      {   // utf-8 string as an attachment
          filename: 'text1.txt',
          content: 'hello world!'
      }]
}

main(messageOptions).catch(console.error);
