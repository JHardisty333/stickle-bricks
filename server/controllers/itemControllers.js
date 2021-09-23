const { Item } = require('../models');

const itemController = {
    getAllItems(req, res) {
        Item.find({})
        .then(dbItemData => {
            res.json(dbItemData)
        })
        .catch(err => res.status(400).json(err));
    },

    getSingleItem({params}, res) {
        Item.findOne({_id: params.id})
        .select('__v')
        .then(dbItemData => {
            if(!dbItemData) {
                res.status(404).json({message: 'No item found!'})
                return;
            }
            res.json(dbItemData);
        })
        .catch(err => res.status(400).json(err))
    },
}

module.exports = itemController;