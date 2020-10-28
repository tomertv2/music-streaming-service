'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Artists', [
      {
        artist_name: 'Arctic Monkeys',
        cover_img:
          'https://i.scdn.co/image/ed0552e9746ed2bbf04ae4bcb5525700ca31522d',
        created_at: '2002-12-10',
        updated_at: '2002-12-10',
      },
      {
        artist_name: 'Solomun',
        cover_img:
          'https://i.scdn.co/image/a7166d9f844c2af97e90fb507091b66e58491dba',
        created_at: '2000-10-21',
        updated_at: '2000-10-21',
      },
      {
        artist_name: 'Noroz',
        cover_img:
          'https://i.scdn.co/image/31def92fb023fdce078b443e37ad1dec64ab8f27',
        created_at: '2017-04-16',
        updated_at: '2017-04-16',
      },
      {
        artist_name: 'Two Feet',
        cover_img:
          'https://i.scdn.co/image/fe9cd22435a70de73d7404f235dc1041a746e02d',
        created_at: '2002-11-29',
        updated_at: '2002-11-29',
      },
      {
        artist_name: 'Avicii',
        cover_img:
          'https://i.scdn.co/image/9c0d8fa969a9f5db6ff860203d6880a125e501d2',
        created_at: '2007-07-30',
        updated_at: '2007-07-30',
      },
      {
        artist_name: 'Zedd',
        cover_img:
          'https://i.scdn.co/image/3eb1e503551823111362b5bfc69cd1624ccd5593',
        created_at: '2005-08-10',
        updated_at: '2005-08-10',
      },
      {
        artist_name: 'Billie Eilish',
        cover_img:
          'https://i.scdn.co/image/022d340319cc6c57ed953075f4c7a2d3346669af',
        created_at: '2010-09-19',
        updated_at: '2010-09-19',
      },
      {
        artist_name: 'Dekel Vaknin',
        cover_img:
          'https://i.scdn.co/image/ab67706c0000da841dd7e4f3a72f7d4557afd010',
        created_at: '2019-01-04',
        updated_at: '2019-01-04',
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
