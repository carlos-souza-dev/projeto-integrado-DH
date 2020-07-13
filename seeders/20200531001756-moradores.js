const bcrypt = require("bcrypt");

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
      interesses: ``,
      admin: true,
      dataNascimento: 1980-01-01,
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
    interesses:`["Filmes","Esportes","Música"]`,
    admin: false,
    dataNascimento: '1997-04-22',
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
      interesses:`["Fotografia","Futebol","Motos","Viagens"]`,
      admin: false,
      dataNascimento: '1996-10-21',
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
      interesses:`["Artes Marciais","Música","Esportes","Design & Tecnologia"]`,
      admin: false,
      dataNascimento: '1990-06-11',
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
      interesses:`["Filosofia","Ficção Científica","Arquitetura","Viagens","Filmes"]`,
      admin: false,
      dataNascimento: '1990-06-11',
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
      interesses:`["Aventura","Livros e Poesia","Viagens"]`,
      admin: false,
      dataNascimento: '1986-05-29',
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
      interesses:``,
      admin: false,
      dataNascimento: '1989-09-19',
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
      foto: '/img/1590888745432biel.jpg',
      sobre: 'Estagiário',
      interesses:``,
      admin: false,
      dataNascimento: '2001-12-08',
      id_apartamento: 2,
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      id: 9,
      nome:'Renan Lopes',
      cpf:'35975612377',
      email: 'real@email.com',
      senha: bcrypt.hashSync('123', 10),
      foto: '/img/1590888745432renan.jpg',
      sobre: 'Funcionário Público',
      interesses: ``,
      admin: false,
      dataNascimento: '1993-08-22',
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
