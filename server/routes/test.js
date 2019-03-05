const router = require('express').Router();
const { test } = require('../controllers/test');

router.get('/', test);

module.exports = router;
