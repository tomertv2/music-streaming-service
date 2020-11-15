const { Router } = require('express');
const { Playlist, Song, Artist } = require('../models');

const router = Router();

// [GET] read all playlists
router.get('/', async (req, res) => {
  try {
    const allPlaylists = await Playlist.findAll();
    res.json(allPlaylists);
  } catch (err) {
    console.log(err);
  }
});

// [GET] read a playlist by ID
router.get('/:id', async (req, res) => {
  try {
    const playlist = await Playlist.findByPk(req.params.id, {
      include: {
        model: Song,
        attributes: ['id', 'title', 'artistId', 'length'],
        include: { model: Artist, attributes: ['artistName'] },
      },
    });
    res.json(playlist);
  } catch (err) {
    console.log(err);
  }
});

// [POST] create a new playlist
router.post('/', async (req, res) => {
  try {
    const newPlaylist = await Playlist.create(req.body);
    res.json(newPlaylist);
  } catch (err) {
    console.log(err);
  }
});

// [PATCH] update a playlist
router.patch('/:id', async (req, res) => {
  try {
    const updatePlaylist = await Playlist.findByPk(req.params.id);
    await updatePlaylist.update(req.body);
    res.json(updatePlaylist);
  } catch (err) {
    console.log(err);
  }
});

// [DELETE] delete a playlist
router.delete('/:id', async (req, res) => {
  try {
    const playlistToDelete = await Playlist.findByPk(req.params.id);
    await playlistToDelete.destroy();
    res.json({ deleted: true });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
