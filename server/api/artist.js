const { Router } = require('express');
const { Artist, Album, Song } = require('../models');

const router = Router();

// [GET] read all artists
router.get('/', async (req, res) => {
  try {
    const allArtists = await Artist.findAll();
    res.json(allArtists);
  } catch (err) {
    console.log(err);
  }
});

// [GET] read an artist by ID
router.get('/:id', async (req, res) => {
  try {
    const artist = await Artist.findByPk(req.params.id, {
      include: { model: Album },
    });
    const songsByArtist = await Artist.findByPk(req.params.id, {
      include: { model: Song },
    });
    res.json({ artist, songsByArtist });
  } catch (err) {
    console.log(err);
  }
});

// [POST] create a new artist
router.post('/', async (req, res) => {
  try {
    const newArtist = await Artist.create(req.body);
    res.json(newArtist);
  } catch (err) {
    console.log(err);
  }
});

// [PATCH] update an artist
router.patch('/:id', async (req, res) => {
  try {
    const updateArtist = await Artist.findByPk(req.params.id);
    await updateArtist.update(req.body);
    res.json(updateArtist);
  } catch (err) {
    console.log(err);
  }
});

// [DELETE] delete an artist
router.delete('/:id', async (req, res) => {
  try {
    const artistToDelete = await Artist.findByPk(req.params.id);
    await artistToDelete.destroy();
    res.json({ deleted: true });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
