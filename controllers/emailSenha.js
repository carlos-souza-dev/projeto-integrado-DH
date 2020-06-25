const nodemailer = require('nodemailer');
const path = require("path");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port:587,
  secure: false,
    auth: {
        user: "sindico.portal.do.condominio@gmail.com",
        pass: "portal2018"
    }
});

const enviarEmailSenha = function (email, token, nome) {

  transporter.sendMail({
      From: "Portal do Condomínio <sindico.portal.do.condominio@gmail.com>",
      to: email,
      subject: "Recuperação de Senha",
      html: 
      `<!DOCTYPE html>
      <html lang="pt-br">
          
      <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Portal do Condomínio</title>      
      </head>
          
      <body">
        <div class="body" style="width: 100%; height: 40vh;">
        <p class="titulo" style="text-align: center; margin: 5vh 0; padding: 3vh; font-size: 3vw;">Abaixo estão seus dados de login.</p>
        <section style="font-family: sans-serif; width: 60%; height: 10vh;">
        <p class="text" style="font-size: 1.7vw;">Usuário: <b>${nome}</b></p>
        <p class="text" style="font-size: 1.7vw;">Token: <b>${token}</b></p>
        </section>
        </div>
        <div style="margin:20px 10px; height:15vh;">
          <p style="font-family: sans-serif; margin: 10px 10px;">Att,</p>
          <p style="font-family: sans-serif; margin: 10px 10px;">Portal do Condomínio</p>
          <img src="cid:logo">
        </div>
      </body>      
      </html>`, 
      attachments: [
        {
          filename: "logo.png",
          path: __dirname + "/../public/img/logo/logo.png",
          cid: "logo"
        }
      ]
  }).then( message => {
      console.log(message);
  }).catch(err => {
      console.log(err);
  });
  
}

module.exports = enviarEmailSenha;