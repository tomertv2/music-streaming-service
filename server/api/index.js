const { Router } = require('express');
const router = Router();

router.use('/song', require('./song'));
// router.use('/albums', require('./album'));
// router.use('/artists', require('./artists'));

module.exports = router;
