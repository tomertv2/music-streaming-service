const { Router } = require('express');
const { Artist } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const allArtists = await Artist.findAll();
  res.json(allArtists);
});

router.get('/:id', async (req, res) => {
  const artist = await Artist.findByPk(req.params.id);
  res.json(artist);
})

module.exports = router;
