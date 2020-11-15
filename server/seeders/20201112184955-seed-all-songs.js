'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Songs', [
      {
        title: 'Beautiful Now',
        length: '00:03:20',
        youtube_link: 'n1a7o44WxNo&',
        track_number: 3,
        lyrics: 'what a cool lyrics...',
        album_id: 8,
        artist_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Transmission',
        length: '00:03:20',
        youtube_link: 'hVHZI_IydU8',
        track_number: 4,
        lyrics: 'what a cool lyrics...',
        album_id: 8,
        artist_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Done With Love',
        length: '00:03:20',
        youtube_link: 'BjsjIkSb0cM',
        track_number: 5,
        lyrics: 'what a cool lyrics...',
        album_id: 8,
        artist_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'True Colors',
        length: '00:03:20',
        youtube_link: 'weEV0Jf0Urk',
        track_number: 6,
        lyrics: 'what a cool lyrics...',
        album_id: 8,
        artist_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Straight Into The Fire',
        length: '00:03:20',
        youtube_link: 'JoE1p7Vhcco',
        track_number: 7,
        lyrics: 'what a cool lyrics...',
        album_id: 8,
        artist_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Papercut',
        length: '00:03:20',
        youtube_link: 'HwtljkGZJnI',
        track_number: 8,
        lyrics: 'what a cool lyrics...',
        album_id: 8,
        artist_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Bumble Bee',
        length: '00:03:20',
        youtube_link: 'scvI5tV9Jk0',
        track_number: 9,
        lyrics: 'what a cool lyrics...',
        album_id: 8,
        artist_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Daisy',
        length: '00:03:20',
        youtube_link: 'CMNBjZBBKPw',
        track_number: 10,
        lyrics: 'what a cool lyrics...',
        album_id: 8,
        artist_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Illusion',
        length: '00:03:20',
        youtube_link: 'kDy5INkW33A',
        track_number: 11,
        lyrics: 'what a cool lyrics...',
        album_id: 8,
        artist_id: 6,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Don't Cry",
        length: '00:03:20',
        youtube_link: 'NWQLtX-7uIE',
        track_number: 1,
        lyrics: 'what a cool lyrics...',
        album_id: 3,
        artist_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'The Way Back',
        length: '00:03:20',
        youtube_link: 'e_aLQ5roFII',
        track_number: 2,
        lyrics: 'what a cool lyrics...',
        album_id: 3,
        artist_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Sombody's Story",
        length: '00:03:20',
        youtube_link: 'sPBVzqOax3Y',
        track_number: 3,
        lyrics: 'what a cool lyrics...',
        album_id: 3,
        artist_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Sof Ona',
        length: '00:03:20',
        youtube_link: 'iO-LZm0Y53M',
        track_number: 1,
        lyrics: 'what a cool lyrics...',
        album_id: 7,
        artist_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Hayahid Kan She Ohev',
        length: '00:03:20',
        youtube_link: '6tu9Uw2Q6OI',
        track_number: 1,
        lyrics: 'what a cool lyrics...',
        album_id: 6,
        artist_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Wake Me Up',
        length: '00:03:20',
        youtube_link: 'IcrbM1l_BoI',
        track_number: 1,
        lyrics: 'what a cool lyrics...',
        album_id: 5,
        artist_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'You Make Me',
        length: '00:03:20',
        youtube_link: '2GADx4Hy-Gg',
        track_number: 2,
        lyrics: 'what a cool lyrics...',
        album_id: 5,
        artist_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Hey Brother',
        length: '00:03:20',
        youtube_link: 'YxIiPLVR6NA',
        track_number: 3,
        lyrics: 'what a cool lyrics...',
        album_id: 5,
        artist_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Addicted To You',
        length: '00:03:20',
        youtube_link: 'Qc9c12q3mrc',
        track_number: 4,
        lyrics: 'what a cool lyrics...',
        album_id: 5,
        artist_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Dear Boy',
        length: '00:03:20',
        youtube_link: 't2rXE5nFrz4',
        track_number: 5,
        lyrics: 'what a cool lyrics...',
        album_id: 5,
        artist_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Liar Liar',
        length: '00:03:20',
        youtube_link: 'uOsOcopQ4HY',
        track_number: 6,
        lyrics: 'what a cool lyrics...',
        album_id: 5,
        artist_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Shame On Me',
        length: '00:03:20',
        youtube_link: 'bIBcUcwu0Ig',
        track_number: 7,
        lyrics: 'what a cool lyrics...',
        album_id: 5,
        artist_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Hope There's Someone",
        length: '00:03:20',
        youtube_link: '2IY7ncczkCg',
        track_number: 8,
        lyrics: 'what a cool lyrics...',
        album_id: 5,
        artist_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Heart Upon My Sleeve',
        length: '00:03:20',
        youtube_link: 'j8Iz_hgYjj4',
        track_number: 9,
        lyrics: 'what a cool lyrics...',
        album_id: 5,
        artist_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'The Days',
        length: '00:03:20',
        youtube_link: 'JDglMK9sgIQ',
        track_number: 1,
        lyrics: 'what a cool lyrics...',
        album_id: 1,
        artist_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'The Nights',
        length: '00:03:20',
        youtube_link: 'UtF6Jej8yb4',
        track_number: 2,
        lyrics: 'what a cool lyrics...',
        album_id: 1,
        artist_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'The Days - Henrik B Remix',
        length: '00:03:20',
        youtube_link: '-GoyJoE-HSo',
        track_number: 3,
        lyrics: 'what a cool lyrics...',
        album_id: 1,
        artist_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'The Days - Felix Jaehn Remix',
        length: '00:03:20',
        youtube_link: 'msWl8WfMiis',
        track_number: 4,
        lyrics: 'what a cool lyrics...',
        album_id: 1,
        artist_id: 5,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Go Fuck Yourself',
        length: '00:03:20',
        youtube_link: 'T7K0pZ9tGi4',
        track_number: 1,
        lyrics: 'what a cool lyrics...',
        album_id: 4,
        artist_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Her Life',
        length: '00:03:20',
        youtube_link: 'rmf4hcNEbG4',
        track_number: 2,
        lyrics: 'what a cool lyrics...',
        album_id: 4,
        artist_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Quick Musical Doodles',
        length: '00:03:20',
        youtube_link: '86cYacKLw5s',
        track_number: 3,
        lyrics: 'what a cool lyrics...',
        album_id: 4,
        artist_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "You're So Cold",
        length: '00:03:20',
        youtube_link: 'wWxMdvjbV9E',
        track_number: 4,
        lyrics: 'what a cool lyrics...',
        album_id: 4,
        artist_id: 4,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Ay Ay Ay',
        length: '00:03:20',
        youtube_link: '4I0hjBCf590',
        track_number: 1,
        lyrics: 'what a cool lyrics...',
        album_id: 2,
        artist_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Heyterim',
        length: '00:03:20',
        youtube_link: 'aNKc216He-I',
        track_number: 2,
        lyrics: 'what a cool lyrics...',
        album_id: 2,
        artist_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Margish Nifla',
        length: '00:03:20',
        youtube_link: 'J9Twjf5Ocak',
        track_number: 3,
        lyrics: 'what a cool lyrics...',
        album_id: 2,
        artist_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Ein Matzav',
        length: '00:03:20',
        youtube_link: 'O1gl6TyMOH8',
        track_number: 4,
        lyrics: 'what a cool lyrics...',
        album_id: 2,
        artist_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Maztomeret',
        length: '00:03:20',
        youtube_link: 'mU5V0dRhI9U',
        track_number: 5,
        lyrics: 'what a cool lyrics...',
        album_id: 2,
        artist_id: 3,
        created_at: new Date(),
        updated_at: new Date()
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
