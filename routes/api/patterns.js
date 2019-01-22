const express = require('express');
const router = express.Router();
const patternController = require('../../controllers/patterns');

router.get('/', patternController.patterns);
router.post('/add', patternController.add);
//router.get('/patterns/:id', patternController.details);

module.exports = router;