const express = require('express');
const router = express.Router();
const suggestedController = require('../../controllers/suggested');

router.get('/', suggestedController.suggested);

module.exports = router;