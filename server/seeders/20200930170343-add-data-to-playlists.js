'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Playlists', [
      {
        playlist_name: 'EDM Hits',
        cover_img: 'https://www.listenspotify.com/uploaded_files/Thf_1587315796.jpg',
        updated_at: '2020-01-01',
        created_at: '2020-01-02'
      },
      {
        playlist_name: 'Pop Hits',
        cover_img: 'https://i1.sndcdn.com/avatars-000477815631-albehj-t500x500.jpg',
        updated_at: '2020-01-01',
        created_at: '2020-01-02'
      },
      {
        playlist_name: 'Rock Hits',
        cover_img: 'https://mediaserver-cont-dc6-2-v4v6.pandora.com/images/a7/88/68/99/5624413bb4e08f8cb03fd1ef/1080W_1080H.jpg',
        updated_at: '2020-01-01',
        created_at: '2020-01-02'
      },
      {
        playlist_name: 'Jazz Hits',
        cover_img: 'https://direct.rhapsody.com/imageserver/images/alb.329532504/600x600.jpg',
        updated_at: '2020-01-01',
        created_at: '2020-01-02'
      },
      {
        playlist_name: 'Israeli Hits',
        cover_img: 'https://i.scdn.co/image/ab67706c0000bebbb7ddf7f36f25ce55ac95e6d9',
        updated_at: '2020-01-01',
        created_at: '2020-01-02'
      },
      {
        playlist_name: 'Country Hits',
        cover_img: 'https://direct.rhapsody.com/imageserver/images/alb.52545167/500x500.jpg',
        updated_at: '2020-01-01',
        created_at: '2020-01-02'
      },
      {
        playlist_name: 'Indie Hits',
        cover_img: 'https://direct.rhapsody.com/imageserver/images/alb.365748207/600x600.jpg',
        updated_at: '2020-01-01',
        created_at: '2020-01-02'
      },
      {
        playlist_name: 'Blues Hits',
        cover_img: 'https://static.qobuz.com/images/covers/yc/td/s5dkdi4u5tdyc_600.jpg',
        updated_at: '2020-01-01',
        created_at: '2020-01-02'
      },
      {
        playlist_name: 'Hip Hop Hits',
        cover_img: 'https://direct.rhapsody.com/imageserver/images/alb.320331229/500x500.jpg',
        updated_at: '2020-01-01',
        created_at: '2020-01-02'
      },
      {
        playlist_name: 'Reggae Hits',
        cover_img: 'http://db.radioline.fr/pictures/radio_5a07c1362cabb02e3c67592dfda0800f/logo200.jpg?size=200',
        updated_at: '2020-01-01',
        created_at: '2020-01-02'
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
