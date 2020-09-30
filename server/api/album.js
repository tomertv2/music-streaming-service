const { Router } = require('express');
const { Album, Song } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const allAlbums = await Album.findAll();
  res.json(allAlbums);
});

router.get('/:id', async (req, res) => {
  const album = await Album.findByPk(req.params.id, {
    include: { model: Song, attributes: ['title', 'youtubeLink', 'lyrics'] },
  });
  res.json(album);
});

module.exports = router;
