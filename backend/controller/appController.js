const nodemailer = require('nodemailer');
// const dotenv = require('dotenv')
require("dotenv").config();


const Mailgen = require('mailgen');

/** send mail from testing account */
const signup = async (req, res) => {

    /** testing account */
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, //generated ethereal user
            pass: testAccount.pass, //generated ethereal password
        },
    });
    
    let message = {
        from: 'admin@example.com',
        to: 'laila.guareb@gmail.com',
        subject: 'TestAPP',
        text: 'Successfully registred with us',
        html: '<b>Successfully registred with us</b>'
  };

  transporter.sendMail(message).then((info) => {
    return res.status(201)
    .json({ 
        msg: "you should receive an email",
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info)
    })
  }).catch(err => {
    return res.status(500).json({ error })
  })

    //res.status(201).json("Signup successfully...!");
}

/** send mail from real gmail account */
const getcontact = (req, res) => {

    const { userEmail } = req.body;

    /** gmail account */
    let config = {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Mailgen",
            link: 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            name: "New User",
            intro: "Your registration has been successfully activated. As a welcome gift, we are pleased to offer you our newbie full stack developper starter kit. Hope you will enjoy reading the content!",
            table: {
                data: [
                    {
                        item: "Full-Stack Starter Kit WhitePaper",
                        description: "Step-by-step FS application build",
                        price: "Free"
                    }
                ]
            },
            outro: "Don't miss our Newsletter!"
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from: process.env.EMAIL,
        to: userEmail,
        subject: "Your contact was registred successfully",
        html: mail
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "you should receive an email"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

    // res.status(201).json("getcontact successfully...!");
}

module.exports = {
    signup,
    getcontact
}