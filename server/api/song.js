const { Router } = require('express');
const { Song, Artist, Album } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const allSongs = await Song.findAll({
    include: Artist,
  });
  res.json(allSongs);
});

router.get('/:id', async (req, res) => {
  try {const song = await Song.findByPk(req.params.id, {
    include: [
      { model: Artist, attributes: ['artistName'] },
      { model: Album, attributes: ['albumName'] },
    ],
  });
  res.json(song);}
  catch (err) {
    console.log(err)
  }
});

module.exports = router;
