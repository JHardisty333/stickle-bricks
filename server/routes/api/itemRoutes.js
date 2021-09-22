const router = require('express').Router();
const { Item } = require('../../models');
const {} = require('../../controllers/itemControllers');

router.route('/')
.get();

module.exports = router;