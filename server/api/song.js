const { Router } = require('express');
const { Song } = require('../models');
const { Artist } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const allSongs = await Song.findAll({
    include: Artist,
  });
  res.json(allSongs);
});

module.exports = router;
