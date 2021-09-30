const router = require('express').Router();
const { getCategories } = require('../../controllers/categoryController');

router.route('/')
.get(getCategories); // ✓

//add a route to add a new category
//err check to make sure it exists on categories.json

module.exports = router;