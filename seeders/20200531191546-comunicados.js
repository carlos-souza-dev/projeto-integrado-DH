'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('comunicados', [{
        id:1,
        titulo: 'Manutenção do elevador',
      
        informacao: '<p><span style="font-size: 18pt;"><strong>Prezados Cond&ocirc;minos,</strong></span><br /><br /><span style="font-size: 18pt;">Informo que o elevador estar&aacute; em manuten&ccedil;&atilde;o preventiva no dia 06/06/2020 durante o per&iacute;odo das 09h00 at&eacute; as 11h00.</span><br /><br /><span style="font-size: 18pt;">Durante este per&iacute;odo, gentileza utilizarem as escadas do edif&iacute;cio.</span><br /><br /><br /><span style="font-size: 18pt;">Atenciosamente,</span></p><p><span style="font-size: 18pt;">O S&iacute;ndico.</span></p>',        
        createdAt: new Date,
        updatedAt: new Date

      },
      {
        id:2,
        titulo: 'COVID19 - Uso de máscaras',
        informacao: `<h2>Como se proteger</h2>
        <p>As recomenda&ccedil;&otilde;es de preven&ccedil;&atilde;o &agrave; COVID-19 s&atilde;o as seguintes:</p>
        <ul>
        <li>Lave com frequ&ecirc;ncia as m&atilde;os at&eacute; a altura dos punhos, com &aacute;gua e sab&atilde;o, ou ent&atilde;o higienize com &aacute;lcool em gel 70%.</li>
        <li>Ao tossir ou espirrar, cubra nariz e boca com len&ccedil;o ou com o bra&ccedil;o, e n&atilde;o com as m&atilde;os.</li>
        <li>Evite tocar olhos, nariz e boca com as m&atilde;os n&atilde;o lavadas.</li>
        <li>Ao tocar, lave sempre as m&atilde;os como j&aacute; indicado.</li>
        <li>Mantenha uma dist&acirc;ncia m&iacute;nima de cerca de 2 metros de qualquer pessoa tossindo ou espirrando.</li>
        <li>Evite abra&ccedil;os, beijos e apertos de m&atilde;os. Adote um comportamento amig&aacute;vel sem contato f&iacute;sico, mas sempre com um sorriso no rosto.</li>
        <li>Higienize com frequ&ecirc;ncia o celular e os brinquedos das crian&ccedil;as.</li>
        <li>N&atilde;o compartilhe objetos de uso pessoal, como talheres, toalhas, pratos e copos.</li>
        <li>Mantenha os ambientes limpos e bem ventilados.</li>
        <li>Evite circula&ccedil;&atilde;o desnecess&aacute;ria nas ruas, est&aacute;dios, teatros, shoppings, shows, cinemas e igrejas. Se puder, fique em casa.</li>
        <li>Se estiver doente, evite contato f&iacute;sico com outras pessoas, principalmente idosos e doentes cr&ocirc;nicos, e fique em casa at&eacute; melhorar.</li>
        <li>Durma bem e tenha uma alimenta&ccedil;&atilde;o saud&aacute;vel.</li>
        <li>Utilize m&aacute;scaras caseiras ou artesanais feitas de tecido em situa&ccedil;&otilde;es de sa&iacute;da de sua resid&ecirc;ncia.</li>
        </ul>`,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id:3,
        titulo: 'Convocação Assembléia Geral Ordinária',
      
        informacao: `<p><span style="font-size: 18pt;"><strong>ASSEMBL&Eacute;IA GERAL ORDIN&Aacute;RIA</strong></span></p>
        <p><span style="font-size: 18pt;">Pelo presente e nos termos do artigo 14&ordm; da Conven&ccedil;&atilde;o, ficam os senhores cond&ocirc;minos do Nova Morada, convocados a comparecerem &aacute; Assembl&eacute;ia Geral Ordin&aacute;ria a se realizar no sal&atilde;o de festas &aacute;s 09h00 do dia 14/06/2020. a fim de deliberarem sobre a seguinte ordem do dia:</span></p>
        <p><span style="font-size: 18pt;">1 - Presta&ccedil;&atilde;o de contas das obras de reformas dos muros;</span></p>
        <p><span style="font-size: 18pt;">2 - Delibera&ccedil;&atilde;o sobre o or&ccedil;amento para a pintura da faxada.</span></p>
        <p><span style="font-size: 18pt; background-color: #f1c40f;">Caso no hor&aacute;rio indicado n&atilde;o tenham comparecido o n&uacute;mero legal de associados, a assembl&eacute;ia funcionar&aacute; 1h depois com o n&uacute;mero de presentes.&nbsp;</span></p>
        <p><span style="font-size: 18pt;">Atenciosamente,</span></p>
        <p><span style="font-size: 18pt;">Jo&atilde;o das Neves</span></p>
        <p><span style="font-size: 18pt;">S&iacute;ndico</span></p>`,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id:4,
        titulo: 'Reunião para discussão de Reforma de Fachada do Prédio',
      
        informacao: `<p><span style="font-size: 18pt;"><strong>REUNIAO GERAL </strong></span></p>
        <p><span style="font-size: 18pt;">Convocação de Moradores para tópicos de discussão</span></p>
        <p><span style="font-size: 18pt;">1 -Escolha Projeto para Fachada</span></p>
        <p><span style="font-size: 18pt;">2 -Apresentação de Orçamentos</span></p>
        <p><span style="font-size: 18pt;">2 -Opções de Mão de Obra</span></p>
        <p><span style="font-size: 18pt;">Atenciosamente,</span></p>
        <p><span style="font-size: 18pt;">Jo&atilde;o das Neves</span></p>
        <p><span style="font-size: 18pt;">S&iacute;ndico</span></p>`,
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      
      return queryInterface.bulkDelete('comunicados', null, {});
    
  }
};
