const { Router } = require('express');
const router = Router();
const { User } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username, password } });
  if (!user) {
    return res.status(500).json({
      errorMessage: 'wrong username or password',
    });
  }
  const token = jwt.sign({ username: username }, process.env.JWT_SECRET, {
    expiresIn: '24h', // expires in 24 hours
  });
  return res.json({
    success: true,
    token,
  });
});

module.exports = router;
