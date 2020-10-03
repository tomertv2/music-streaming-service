const { Router } = require('express');
const { Artist, Album, Song } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const allArtists = await Artist.findAll();
  res.json(allArtists);
});

router.get('/:id', async (req, res) => {
  const artist = await Artist.findByPk(req.params.id, {
    include: {model: Album},
  });
  const songsByArtist = await Artist.findByPk(req.params.id, {
    include: {model: Song}
  })
  res.json({artist, songsByArtist});
});

module.exports = router;
