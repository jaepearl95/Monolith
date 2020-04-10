const nodeMailer = require('nodemailer');
let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,  //true for 465 port, false for other ports
            auth: {
                user: 'raspberrypicallhome@gmail.com',
                pass: 'picallhome'
            }
        });

   let mailOptions = {
            from: '"Your Name" <youremail@example.com>', // sender address
            to:  'aokunseinde@gmail.com', // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world?', // plain text body
            html: '<b>Hello world?</b>' // html body
        };

let message = {
    to: 'Andris Reinman <aokunseinde@gmail.com>',

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
           filename: 'text3.txt',
            path: 'http://universalsolventstudios.com/text3.txt' // stream this file
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
