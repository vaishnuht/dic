// import nodemailer from 'nodemailer';
// import http from 'http'
const nodemailer =require('nodemailer');
const http = require('http');
const server=http.createServer((request, response)=>{
  function email (email,formData){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        // host: 'smtp.gmail.com',
        secure:true,
        port:465,
        auth: {
          user: 'vaishnuht@gmail.com',
          pass: 'plosipoyqtwujngp'
        }
      });
    


  var mailOptions = {
    from: 'vaishnuht@gmail.com',
    to: 'vaishnuht@gmail.com',
    subject: 'Sending Email using Node.js',
    text: "formData"
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      response.end();
    }
  });

  }
  
})
// email();
server.listen(8080);
// export default email;