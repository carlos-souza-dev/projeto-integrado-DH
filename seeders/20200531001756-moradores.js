const bcrypt = require("bcrypt");
const interesses = " ";
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkInsert('moradores', [
    {
      id: 1,
      nome:'Admin',
      cpf:'00000000000',
      email: 'adm@email.com',
      senha: bcrypt.hashSync('123', 10),
      foto: './img/user/fotoDefault.png',
      sobre: '',
      interesses:JSON.stringify(interesses),
      admin: true,
      dataNascimento: 19800101,
      id_apartamento: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
    {
    id: 2,
    nome:'Camila Lopes',
    cpf:'12334512312',
    email: 'camila@email.com',
    senha: bcrypt.hashSync('123', 10),
    foto: '/img/1590884087357camila.jpg',
    sobre: 'Estudante',
    interesses:JSON.stringify(interesses),
    admin: false,
    dataNascimento: 19970422,
    id_apartamento: 2,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
      id: 3,
      nome:'Carlos Silva',
      cpf:'12309812312',
      email: 'carlos@email.com',
      senha: bcrypt.hashSync('123', 10),
      foto: '/img/1590887656454carlos.jpg',
      sobre: 'Estudante',
      interesses:JSON.stringify(interesses),
      admin: false,
      dataNascimento: 19961021,
      id_apartamento: 3,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      id: 4,
      nome:'Daniel Santamaria',
      cpf:'45678901234',
      email: 'daniel@email.com',
      senha: bcrypt.hashSync('123', 10),
      foto: '/img/1589940566291daniel.jpg',
      sobre: 'Estudante',
      interesses:JSON.stringify(interesses),
      admin: false,
      dataNascimento: 19900611,
      id_apartamento: 4,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      id: 5,
      nome:'Gustavo Nobrega',
      cpf:'23243123444',
      email: 'gustavo@email.com',
      senha: bcrypt.hashSync('123', 10),
      foto: '/img/1590888599045gustavo.jpg',
      sobre: 'Estudante',
      interesses:JSON.stringify(interesses),
      admin: false,
      dataNascimento: 19900611,
      id_apartamento: 5,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      id: 6,
      nome:'Juliana Borges',
      cpf:'37543387899',
      email: 'juliana@email.com',
      senha: bcrypt.hashSync('123', 10),
      foto: '/img/1575687894345juliana.jpg',
      sobre: 'Estudante',
      interesses:JSON.stringify(interesses),
      admin: false,
      dataNascimento: 19860529,
      id_apartamento: 6,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      id: 7,
      nome:'Alex Araujo',
      cpf:'34920239434',
      email: 'alex@email.com',
      senha: bcrypt.hashSync('123', 10),
      foto: '/img/1590888745432alex.jpg',
      sobre: 'Estudante',
      interesses:JSON.stringify(interesses),
      admin: false,
      dataNascimento: 19890919,
      id_apartamento: 6,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      id: 8,
      nome:'Gabriel Lopes',
      cpf:'35960212278',
      email: 'biel@email.com',
      senha: bcrypt.hashSync('123', 10),
      foto: '/img/1590888745432alex.jpg',
      sobre: 'Estagiário',
      interesses:JSON.stringify(interesses),
      admin: false,
      dataNascimento: 20011208,
      id_apartamento: 2,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      id: 8,
      nome:'Renan Lopes',
      cpf:'35975612377',
      email: 'real@email.com',
      senha: bcrypt.hashSync('123', 10),
      foto: '/img/1590888745432renan.jpg',
      sobre: 'Funcionário Público',
      interesses: JSON.stringify(interesses),
      admin: false,
      dataNascimento: 19930822,
      id_apartamento: 2,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
  
  
  ]);
    
  },

  down: (queryInterface, Sequelize) => {
    
   return queryInterface.bulkDelete('moradores', null, {});

  }
};
