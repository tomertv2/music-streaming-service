const { Router } = require('express');
const { Album, Song, Artist } = require('../models');

const router = Router();

// [GET] read all albums
router.get('/', async (req, res) => {
  try {
    const allAlbums = await Album.findAll();
    res.json(allAlbums);
  } catch (err) {
    console.log(err);
  }
});

// [GET] read an album by ID
router.get('/:id', async (req, res) => {
  try {
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
  } catch (err) {
    console.log(err);
  }
});

// [POST] create a new album
router.post('/', async (req, res) => {
  try {
    const newAlbum = await Album.create(req.body);
    res.json(newAlbum);
  } catch (err) {
    console.log(err);
  }
});

// [PATCH] update an album
router.patch('/:id', async (req, res) => {
  try {
    const updateAlbum = await Album.findByPk(req.params.id);
    await updateAlbum.update(req.body);
    res.json(updateAlbum);
  } catch (err) {
    console.log(err);
  }
});

// [DELETE] delete an album
router.delete('/:id', async (req, res) => {
  try {
    const albumToDelete = await Album.findByPk(req.params.id);
    await albumToDelete.destroy();
    res.json({ deleted: true });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
