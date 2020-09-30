const { Router } = require('express');
const { Playlist, Song, PlaylistSong } = require('../models');

const router = Router();

router.get('/:id', async (req, res) => {
  const playlist = await Playlist.findByPk(req.params.id, {
    includes: { model: Song },
  });
  res.json(playlist);
});

module.exports = router;
