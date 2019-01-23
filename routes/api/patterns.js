const express = require('express');
const router = express.Router();
const patternController = require('../../controllers/patterns');

router.get('/', patternController.patterns);
router.get('/:id', patternController.details);
router.post('/add', patternController.add);

module.exports = router;