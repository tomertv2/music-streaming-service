'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Albums', [
      {
        album_name: 'The Days / Nights',
        cover_img:
          'https://i.scdn.co/image/ab67616d00001e020ae4f4d42e4a09f3a29f64ad',
        updated_at: '2019-07-31',
        created_at: '2019-07-31',
        artist_id: 5
      },
      {
        album_name: 'Margish Nifla',
        cover_img:
          'https://i.scdn.co/image/ab67616d00001e02128c4edc078f6d86311ab9af',
        updated_at: '2019-07-31',
        created_at: '2019-07-31',
        artist_id: 3
      },
      {
        album_name: 'Black Label #36',
        cover_img:
          'https://d1c4rk9le5opln.cloudfront.net/70629e299db73e77ae809cb5223de397.jpg',
        updated_at: '2019-07-31',
        created_at: '2019-07-31',
        artist_id: 2
      },
      {
        album_name: 'First Steps',
        cover_img:
          'https://i.scdn.co/image/ab67616d00001e02488f7916bcb14082e1acb101',
        updated_at: '2019-07-31',
        created_at: '2019-07-31',
        artist_id: 4
      },
      {
        album_name: 'True',
        cover_img:
          'https://i.scdn.co/image/ab67616d00001e02e14f11f796cef9f9a82691a7',
        updated_at: '2019-07-31',
        created_at: '2019-07-31',
        artist_id: 5
      },
      {
        album_name: 'Hayahid Kan She Ohev (Single)',
        cover_img:
          'https://i.ytimg.com/vi/6tu9Uw2Q6OI/maxresdefault.jpg',
        updated_at: '2019-07-31',
        created_at: '2019-07-31',
        artist_id: 8
      },
      {
        album_name: 'Sof Ona (Single)',
        cover_img:
          'https://images.genius.com/f15fac762ee77eac07e20713d967c5bc.1000x1000x1.jpg',
        updated_at: '2019-07-31',
        created_at: '2019-07-31',
        artist_id: 8
      },
      {
        album_name: 'True Colors',
        cover_img:
          'https://i.scdn.co/image/ab67616d00001e02d040bc5b46915b49a64d7b1d',
        updated_at: '2019-07-31',
        created_at: '2019-07-31',
        artist_id: 6
      },
      {
        album_name: 'AM',
        cover_img:
          'https://upload.wikimedia.org/wikipedia/he/0/04/Arctic_Monkeys_-_AM.png',
        updated_at: '2019-07-31',
        created_at: '2019-07-31',
        artist_id: 1
      },
      {
        album_name: 'WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?',
        cover_img:
          'https://i.scdn.co/image/ab67616d0000b27350a3147b4edd7701a876c6ce',
        updated_at: '2019-07-31',
        created_at: '2019-07-31',
        artist_id: 7
      },
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
