'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('classificados', [{
        id: 1,
        titulo: 'Aulas de violão',
        foto: './img/classificados/aulas violão.png',
        descricao: 'Aulas particulares de violão',
        categoria: 'Instrumentos musicais',
        tipo: 'Serviço',
        aprovacao: 1,
        id_morador: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      id: 2,
        titulo: 'Aulas de matemática',
        foto: './img/classificados/aulas.png',
        descricao: 'Aulas particulares de matemática',
        categoria: 'Educação',
        tipo: 'Serviço',
        aprovacao: 1,
        id_morador: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
  {
    id: 3,
        titulo: 'Babá',
        foto: './img/classificados/baba.png',
        descricao: 'Cuida-se de crianças',
        categoria: 'Outros',
        tipo: 'Serviço',
        aprovacao: 0,
        id_morador: 6,
        createdAt: new Date(),
        updatedAt: new Date()
  },
{
  id: 4,
        titulo: 'Marmitas saudáveis',
        foto: './img/classificados/marmita.png',
        descricao: 'Marmitas de baixa calorias para te ajudar a ter uma vida mais saudável',
        categoria: 'Alimentos e bebidas',
        tipo: 'Produto',
        aprovacao: 0,
        id_morador: 3,
        createdAt: new Date(),
        updatedAt: new Date()
},
{
  id: 5,
        titulo: 'Passeador de pets',
        foto: './img/classificados/dog.png',
        descricao: 'Levo seu pet para passear',
        categoria: 'Animais',
        tipo: 'Serviço',
        aprovacao: 0,
        id_morador: 7,
        createdAt: new Date(),
        updatedAt: new Date()
},
{
  id: 6,
        titulo: 'Organizador de Eventos',
        foto: './img/classificados/organizador.png',
        descricao: 'Organizo eventos como aniversários, casamentos, entre outros',
        categoria: 'Festas',
        tipo: 'Serviço',
        aprovacao: 1,
        id_morador: 5,
        createdAt: new Date(),
        updatedAt: new Date()
},
{
  id: 7,
        titulo: 'Bolos',
        foto: './img/classificados/bolo.png',
        descricao: 'Aceito encomendas de bolos',
        categoria: 'Alimentos e bebidas',
        tipo: 'Serviço',
        aprovacao: 1,
        id_morador: 3,
        createdAt: new Date(),
        updatedAt: new Date()
},
{
  id: 8,
        titulo: 'Pintor',
        foto: './img/classificados/pintor.jpeg',
        descricao: 'Realizo pinturas em geral',
        categoria: 'Ferramentas e construção',
        tipo: 'Serviço',
        aprovacao: 1,
        id_morador: 4,
        createdAt: new Date(),
        updatedAt: new Date()
},
{
  id: 9,
        titulo: 'Artesanato',
        foto: './img/classificados/artesanato.jpg',
        descricao: 'Vendo vasos decorativos',
        categoria: 'Outros',
        tipo: 'Produto',
        aprovacao: 1,
        id_morador: 6,
        createdAt: new Date(),
        updatedAt: new Date()
},
{
  id: 10,
        titulo: 'Funilaria',
        foto: './img/classificados/assistência.png',
        descricao: 'Presto serviços de funilaria para seu auto',
        categoria: 'Outros',
        tipo: 'Serviço',
        aprovacao: 1,
        id_morador: 7,
        createdAt: new Date(),
        updatedAt: new Date()
},
{
  id: 11,
        titulo: 'Reforço Escolar',
        foto: './img/classificados/aulasCriancas.jpg',
        descricao: 'Aulas de reforço para seus pequenos',
        categoria: 'Educação',
        tipo: 'Serviço',
        aprovacao: 1,
        id_morador: 5,
        createdAt: new Date(),
        updatedAt: new Date()
},
{
  id: 12,
        titulo: 'Manutenção de computadores',
        foto: './img/classificados/informatica.jpg',
        descricao: 'Conserto computadores desktops e notebooks',
        categoria: 'Informática',
        tipo: 'Serviço',
        aprovacao: 0,
        id_morador: 3,
        createdAt: new Date(),
        updatedAt: new Date()
},
{
  id: 13,
        titulo: 'Máscaras de pano',
        foto: './img/classificados/mascaras.jpg',
        descricao: 'Vendo máscaras de pano',
        categoria: 'Outros',
        tipo: 'Produto',
        aprovacao: 1,
        id_morador: 2,
        createdAt: new Date(),
        updatedAt: new Date()
},
{
  id: 14,
        titulo: 'Personal Trainer',
        foto: './img/classificados/personal.jpg',
        descricao: 'Presto serviços de personal trainer',
        categoria: 'Saúde',
        tipo: 'Serviço',
        aprovacao: 0,
        id_morador: 4,
        createdAt: new Date(),
        updatedAt: new Date()
},
{
  id: 15,
        titulo: 'Lanches',
        foto: './img/classificados/bolinho.png',
        descricao: 'Vendo lanches para seu café da manhã ou da tarde',
        categoria: 'Alimentos',
        tipo: 'Produto',
        aprovacao: 1,
        id_morador: 6,
        createdAt: new Date(),
        updatedAt: new Date()
},
{
  id: 16,
        titulo: 'DJ',
        foto: './img/classificados/dj.jpg',
        descricao: 'Todo tipo de música para cada ocasião. Vamos animar sua Festa!',
        categoria: 'Festas',
        tipo: 'Serviço',
        aprovacao: 1,
        id_morador: 8,
        createdAt: new Date(),
        updatedAt: new Date()
},
{
  id: 17,
        titulo: 'Cabeleireira',
        foto: './img/classificados/cabeleireira.jpg',
        descricao: 'Cortes, Penteados, Tratamento Capilar e mais.',
        categoria: 'Outros',
        tipo: 'Serviço',
        aprovacao: 0,
        id_morador: 9,
        createdAt: new Date(),
        updatedAt: new Date()
},
{
  id: 18,
        titulo: 'Bolo de Pote',
        foto: './img/classificados/boloPote.jpg',
        descricao: 'Bolos deliciosos de inúmeros sabores',
        categoria: 'Alimentos e Bebidas',
        tipo: 'Produto',
        aprovacao: 1,
        id_morador: 7,
        createdAt: new Date(),
        updatedAt: new Date()
}
], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('classificados', null, {});
    
  }
};
