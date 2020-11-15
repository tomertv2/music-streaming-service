const { Router } = require('express');
const { Song, Artist, Album } = require('../models');

const router = Router();

// [GET] read all songs
router.get('/', async (req, res) => {
  const allSongs = await Song.findAll({
    include: Artist,
  });
  res.json(allSongs);
});

// [GET] read a song by ID
router.get('/:id', async (req, res) => {
  try {
    const song = await Song.findByPk(req.params.id, {
      include: [
        { model: Artist, attributes: ['artistName'] },
        { model: Album, attributes: ['albumName'] },
      ],
    });
    res.json(song);
  } catch (err) {
    console.log(err);
  }
});

// [POST] create a new song
router.post('/', async (req, res) => {
  try {
    const newSong = await Song.create(req.body);
    res.json(newSong);
  } catch (err) {
    console.log(err);
  }
});

// [PATCH] update a song
router.patch('/:id', async (req, res) => {
  try {
    const updateSong = await Song.findByPk(req.params.id);
    await updateSong.update(req.body);
    res.json(updateSong);
  } catch (err) {
    console.log(err);
  }
});

// [DELETE] delete a song
router.delete('/:id', async (req, res) => {
  try {
    const songToDelete = await Song.findByPk(req.params.id);
    await songToDelete.destroy();
    res.json({ deleted: true });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
