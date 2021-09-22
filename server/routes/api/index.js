const router = require('express').Router();
const itemRoutes = require('./itemRoutes');
const userRoutes = require('./userRoutes');
const orderRoutes = require('./orderRoutes');
const adminRoutes = require('./adminRoutes');


router.use('/item', itemRoutes);
router.use('/user', userRoutes);
router.use('/order', orderRoutes);
router.use('/admin', adminRoutes);

module.exports = router;