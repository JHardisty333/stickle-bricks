const { Category } = require('../models');

const categoryController = {

    getCategories(req, res) {
        Category.find({})
            .then(categoryData => res.status(200).json(categoryData))
            .catch(err => res.status(500).json(err));
    }
}

module.exports = categoryController;