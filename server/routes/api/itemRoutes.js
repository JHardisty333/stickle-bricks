const router = require('express').Router();
const { verifyToken, VerifyTokenAdmin }
const {
    getAllItems,
    searchItems
} = require('../../controllers/itemControllers');
const { verifyTokenAdmin } = require('../../utils/auth');
const { route } = require('./orderRoutes');

router.route('/')
.get(getAllItems);

router.route('/search/:name')
.get(searchItems)

router.route('/type/:type')
.get(itemsByType)

router.route('/category/:id')
.get(itemsByCategory)

router.route('/color/:id')
.get(itemsByColor)

router.route('/admin')
.post(verifyTokenAdmin, addItem)
.put(verifyTokenAdmin, updateItemInfo)

module.exports = router;

//