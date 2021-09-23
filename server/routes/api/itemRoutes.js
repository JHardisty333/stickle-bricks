const router = require('express').Router();
const {
    getAllItems,
    getSingleItem
} = require('../../controllers/itemControllers');

router.route('/')
.get(getAllItems);

router.route('/:id')
.get(getSingleItem)

module.exports = router;