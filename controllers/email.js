const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "carlos.beto71@gmail.com",
        pass: "Talita10022018"
    }
});

transporter.sendMail({
    From: "Portal do Condomínio <carlos.beto71@gmail.com>",
    to: "carlos.beto71@gmail.com",
    subject: "Novo cadastro",
    html: "Olá, foi um novo classificado"
}).then( message => {
    console.log(message);
}).catch(err => {
    console.log(err);
});