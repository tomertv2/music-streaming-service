const { Router } = require('express');
const { Playlist, Song, Artist } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const allPlaylists = await Playlist.findAll();
  res.json(allPlaylists);
});

router.get('/:id', async (req, res) => {
  const playlist = await Playlist.findByPk(req.params.id, {
    include: {
      model: Song,
      attributes: ['id', 'title', 'artistId', 'length'],
      include: { model: Artist, attributes: ['artistName'] },
    },
  });
  res.json(playlist);
});

module.exports = router;
