'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('prestadores', [{
        id: 1,
        nome: 'Ademir Ferreira',
       rg: '11234456-45',
       cpf:'32544567890',
       categoria: 'Encanador',
       foto: '/img/1590888756785ademirFerreira.jpg',
       id_apartamento: 2,
    
      },
    {
      id: 2,
        nome: 'Helton Dias',
       rg: '65323454-33',
       cpf:'34598890922',
       categoria: 'Pintor',
       foto: '/img/1590888765445heltonDias.jpg',
       id_apartamento: 3,
    },
  {
    id: 3,
        nome: 'Adriana Farias',
       rg: '43768557-03',
       cpf:'45534526578',
       categoria: 'Psicóloga',
       foto: '/img/1590889765560adrianaFarias.jpg',
       id_apartamento: 4,
  },
{
  id: 4,
        nome: 'Cristiano Nunes',
       rg: '34556345-03',
       cpf:'32745698722',
       categoria: 'Personal Trainer',
       foto: '/img/1590889844543cristianoNunes.jpg',
       id_apartamento: 5,
},
{
  id: 5,
        nome: 'Fernanda Sales',
       rg: '35786546-90',
       cpf:'36709845502',
       categoria: 'Personal Trainer',
       foto: '/img/1590889943454fernandaSales.jpg',
       id_apartamento: 6,
},
{
  id: 6,
        nome: 'Gilvan Gomes',
       rg: '42778564-02',
       cpf:'45634387821',
       categoria: 'Contador',
       foto: '/img/1590890345234gilvanGomes.jpg',
       id_apartamento: 2,
},
{
  id: 7,
        nome: 'Leticia Lima',
       rg: '34901345-44',
       cpf:'49832294588',
       categoria: 'Terapeuta',
       foto: '/img/1590891232321leticiaLima.jpg',
       id_apartamento: 4,
},
{
  id: 8,
        nome: 'Mauricio Vilela',
       rg: '29382347-32',
       cpf:'32948273349',
       categoria: 'Professor de Matemática',
       foto: '/img/1590892765445mauricioVilela.jpg',
       id_apartamento: 6,
},
{
  id: 9,
        nome: 'Danielle Cerqueira',
       rg: '29372458-32',
       cpf:'32968173489',
       categoria: 'Instrutora de Yoga',
       foto: '/img/1590892765445mauricioVilela.jpg',
       id_apartamento: 7,
},{
  id: 10,
        nome: 'Felipe Lima',
       rg: '56972458-89',
       cpf:'46967793489',
       categoria: 'Fotógrafo',
       foto: '/img/1590892765445felipeLima.jpg',
       id_apartamento: 7,
}
], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      
      return queryInterface.bulkDelete('prestadores', null, {});
    
  }
};
