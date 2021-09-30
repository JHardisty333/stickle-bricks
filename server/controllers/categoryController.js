const { Category } = require('../models');

const categoryController = {

    getCategories(req, res) {
        Category.find({})
        .select('-__v -_id')
            .then(categoryData => {
                categoryData = categoryData.sort((a, b) => (a.categoryName > b.categoryName) ? 1 : ((b.categoryName > a.categoryName) ? -1 : 0));
                res.status(200).json(categoryData)
            })
            .catch(err => res.status(500).json(err));
    }
}

module.exports = categoryController;