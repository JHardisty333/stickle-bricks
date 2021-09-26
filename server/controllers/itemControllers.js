const { Item, Category } = require('../models');

const itemController = {
    getAllItems(req, res) {
        Item.find({})
        .then(dbItemData => {
            res.json(dbItemData)
        })
        .catch(err => res.status(500).json(err));
    },
    
    searchItems(req, res) {
        Item.find({ 
            $search: {
                "text": {
                    "query": req.body.name,
                    "path": "product_name",
                    "fuzzy": {}
                }
            }
        })
        .then(itemData => {
            if(!itemData) {
                res.status(204).json({message: 'Not able to find any items!'})
                return;
            }
            res.json(itemData);
        })
        .catch(err => res.status(500).json(err))
    },
    itemsByType(req, res) {
        Item.find({
            itemType: req.params.type
        })
        .then(itemData => {
            if(!itemData) {
                res.status(204).json({message: 'No items found with this type!'})
                return;
            }
            res.json(itemData);
        })
        .catch(err => res.status(500).json(err));
    },
    itemsByCategory(req, res) {
        Item.find({
            categoryId: req.params.id
        })
        .then(itemData => {
            if(!itemData) {
                res.status(204).json({message: 'No items found within this category!'})
                return;
            }
            res.json(itemData);
        })
        .catch(err => res.status(500).json(err))
    },
    itemsByColor(req, res) {
        Item.find({
            colorId: req.params.id 
        })
        .then(itemData => {
            if(!itemData) {
                res.status(204).json({message: 'No items found with this color!'})
                return;
            }
            res.json(itemData)
        })
        .catch(err => res.status(500).json(err));
    },
    addItem(req, res) {
        Item.create(
            {body}, 
            { new: true, runValidators: true })
        .then(itemData => {
           res.status(200).json(itemData)
        })
        .catch(err => res.status(500).json(err));
    },
    updateItemInfo(req, res) {
        Item.findOneAndUpdate(
            {_id: req.body.id},
            {body},
            { new: true, runValidators: true })
        .then(itemData => {
            if(!itemData) {
                res.status(204).json({message: 'No item found with this Id!'})
                return;
            }
            res.json(itemData);
        })
        .catch(err => res.status(500).json(err))
    }
}

module.exports = itemController;