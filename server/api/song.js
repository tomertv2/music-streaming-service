const { Router } = require('express');
const { Song } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const allSongs = await Song.findAll();
  res.send(allSongs);
});

module.exports = router;
