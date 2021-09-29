const router = require('express').Router();
const { verifyTokenAdmin } = require('../../utils/auth');
const {
    getAllItems,
    searchItems,
    itemsByType,
    itemsByCategory,
    itemsByColor,
    addItem, 
    updateItemInfo
} = require('../../controllers/itemControllers');

router.route('/')
.get(getAllItems);

router.route('/search')
.post(searchItems);

router.route('/type/:type')
.get(itemsByType);

router.route('/category/:id')
.get(itemsByCategory);

router.route('/color/:id')
.get(itemsByColor);

router.route('/admin')
.post(verifyTokenAdmin, addItem)

router.route('/admin/:id')
.put(verifyTokenAdmin, updateItemInfo);

module.exports = router;

//