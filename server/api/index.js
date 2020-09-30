const { Router } = require('express');
const router = Router();

router.use('/song', require('./song'));
router.use('/album', require('./album'));
router.use('/artist', require('./artist'));
router.use('/playlist', require('./playlist'));

module.exports = router;
