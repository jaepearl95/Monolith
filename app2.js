var express = require('express');
const nodeMailer = require('nodemailer');
var app = express();
var port = 9030;
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use(express.static(__dirname + '/'));


io.on('connection', function(socket){
  console.log('the sockets are connected');
  var mon=Math.floor((Math.random() * 10) + 1);



  //io.emit('',{name:"name", age:45}b );
  // socket.on('',)

socket.on('send', function (data) {
  console.log(data);

  if (data.r!=""){

  try {
    console.log("entering try block");
    throw "thrown message";
    console.log("this message is never seen");
  }
  catch (e) {
    console.log("entering catch block");
    console.log(e);
    console.log("leaving catch block");
  }
  finally {
    console.log("entering and leaving the finally block");
  }

  console.log("leaving try-catch statement");

  let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,  //true for 465 port, false for other ports
        auth: {
            user: 'raspberrypicallhome@gmail.com',
            pass: 'picallhome'
        }
  });

  let message = {
      to: 'Andris Reinman <'+data.r,

          // Subject of the message
          subject: 'Nodemailer is unicode friendly ✔',

          // plaintext body
          text: 'Hello to myself!',

          // HTML body
          html:
              '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
              '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',

           attachments: [
          {   // utf-8 string as an attachment
             filename: 'MONOLITH-'+mon,
              path: 'http://iyaporepository.org/_monolith/monolith-'+mon+'.txt' // stream this file
          }

              ]
  }

  transporter.sendMail(message, (error, info) => {
              if (error) {
                  console.log(error);
                  res.status(400).send({success: false})
              } else {
                  res.status(200).send({success: true});
              }
          });
    }

  });
});

server.listen(9030);
