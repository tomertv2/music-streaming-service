const { Router } = require('express');
const router = Router();
const checkToken = require('../middleware/auth');

router.use('/login', require('./auth'));

router.use('/song', checkToken, require('./song'));
router.use('/album', checkToken, require('./album'));
router.use('/artist', checkToken, require('./artist'));
router.use('/playlist', checkToken, require('./playlist'));
router.use('/search', checkToken, require('./search'));

module.exports = router;
