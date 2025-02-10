// const express = require('express');
// const http=require('http');
import nodemailer from 'nodemailer';
// const mailer=require('nodemailer');


// const server=http.createServer((request, response)=>{
  const email=(formData)=>{
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure:true,
        port:465,
        auth: {
          user: 'vaishnuht@gmail.com',
          pass: 'ohfzbeqtvqxmmysr'
        }
      });
    


  var mailOptions = {
    from: 'vaishnuht@gmail.com',
    to: 'vaishnuht@gmail.com',
    subject: 'Sending Email using Node.js',
    text: `sfdkhgkhdfk`
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
  
// })
// email();
// server.listen(8080);
export default email;