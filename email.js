// send an email using nodemailer package in nodejs

/*

    1. create a nodemailer transporter (SMTP)
    2. create message option
    3. send email using sendMail method of the transporter additional
    4. html page use for email send 
    5. email file attach

*/

const nodemailer = require("nodemailer");

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

const messageOptions = {
    from: '"Bigyan Dhakal 👻" <dhakalbigyan0@gmail.com>', // sender address
    to: "bigyandhakal377@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world, Bigyan Dhakal", // plain text body
    html: "<b>Hello world?</b>", // html body
}

main(messageOptions).catch(console.error);
