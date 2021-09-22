const router = require('express').Router();
const { User, Order, } = require('../../models');
const {} = require('../../controllers/orderControllers');

router.route('/')
.get();

module.exports = router;