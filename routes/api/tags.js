const express = require('express');
const router = express.Router();
const tagController = require('../../controllers/tags');

router.get('/', tagController.tags);
router.post('/add', tagController.add);

module.exports = router;