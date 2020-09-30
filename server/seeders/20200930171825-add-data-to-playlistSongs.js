'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('playlistSongs', [
      {
        playlist_id: 1,
        song_id: 7,
        created_at: '2020-01-02',
        updated_at: '2020-01-05'
      },
      {
        playlist_id: 2,
        song_id: 5,
        created_at: '2020-01-02',
        updated_at: '2020-01-05'
      },
      {
        playlist_id: 2,
        song_id: 9,
        created_at: '2020-01-02',
        updated_at: '2020-01-05'
      },
      {
        playlist_id: 2,
        song_id: 4,
        created_at: '2020-01-02',
        updated_at: '2020-01-05'
      },
      {
        playlist_id: 2,
        song_id: 2,
        created_at: '2020-01-02',
        updated_at: '2020-01-05'
      },
      {
        playlist_id: 3,
        song_id: 1,
        created_at: '2020-01-02',
        updated_at: '2020-01-05'
      },
      {
        playlist_id: 3,
        song_id: 4,
        created_at: '2020-01-02',
        updated_at: '2020-01-05'
      },
      {
        playlist_id: 4,
        song_id: 8,
        created_at: '2020-01-02',
        updated_at: '2020-01-05'
      },
      {
        playlist_id: 5,
        song_id: 4,
        created_at: '2020-01-02',
        updated_at: '2020-01-05'
      },
      {
        playlist_id: 6,
        song_id: 7,
        created_at: '2020-01-02',
        updated_at: '2020-01-05'
      },
      {
        playlist_id: 6,
        song_id: 1,
        created_at: '2020-01-02',
        updated_at: '2020-01-05'
      },
      {
        playlist_id: 6,
        song_id: 5,
        created_at: '2020-01-02',
        updated_at: '2020-01-05'
      },
      {
        playlist_id: 6,
        song_id: 9,
        created_at: '2020-01-02',
        updated_at: '2020-01-05'
      },
      {
        playlist_id: 7,
        song_id: 2,
        created_at: '2020-01-02',
        updated_at: '2020-01-05'
      },
      {
        playlist_id: 8,
        song_id: 5,
        created_at: '2020-01-02',
        updated_at: '2020-01-05'
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
