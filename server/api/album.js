const { Router } = require('express');
const { Album, Song, Artist } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const allAlbums = await Album.findAll();
  res.json(allAlbums);
});

router.get('/:id', async (req, res) => {
  const album = await Album.findByPk(req.params.id, {
    include: [
      {
        model: Song,
        attributes: ['id', 'title', 'youtubeLink', 'lyrics', 'length'],
      },
      { model: Artist, attributes: ['artistName'] },
    ],
  });
  res.json(album);
});

module.exports = router;
