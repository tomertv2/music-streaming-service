const { Router } = require('express');
const { Song } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  res.send('hello song');
});

module.exports = router;
