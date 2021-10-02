const { Item, Category } = require('../models');
const colors = require('../utils/colors.json');
const types = require('../utils/types.json');
const categories = require('../utils/categories.json');
const axios = require('axios');
const Oauth1Helper = require('../utils/oauth');


const itemController = {
    getAllItems(req, res) {
        Item.find({})
            .select('-__v')
            .then(dbItemData => {
                res.json(dbItemData)
            })
            .catch(err => res.status(500).json({error: err}));
    },
    getOneItem(req, res) {
        Item.findOne({_id: req.params.id})
            .select('-__v')
            .then(dbItemData => {
                res.status(200).json(dbItemData)
            })
            .catch(err => res.status(500).json({ error: err }));
    },
    searchItems(req, res) {
        Item.find(
            { $text: { $search: req.body.search } },
            { score: { $meta: "textScore" } }
        ).sort({ score: { $meta: "textScore" } })
        .select('-__v -score')
            .then(itemData => {
                res.status(200).json(itemData);
            })
            .catch(err => res.status(500).json({error: err}));
    },
    itemTypes(req, res) {
        res.json(types);
    },
    itemsByType(req, res) {
        Item.find({
            itemType: req.params.type.toUpperCase()
        })
            .then(itemData => res.json(itemData))
            .catch(err => res.status(500).json({error: err}));
    },
    itemsByCategory(req, res) {
        Item.find({
            categoryId: req.params.id
        })
            .select('-__v')
            .then(itemData => res.json(itemData))
            .catch(err => res.status(500).json({error: err}));
    },
    itemColors(req, res) {
        res.json(colors);
    },
    itemsByColor(req, res) {
        Item.find({
            colorId: req.params.id
        })
            .then(itemData => {
                res.json(itemData)
            })
            .catch(err => res.status(500).json({error: err}));
    },
    featuredItems(req, res) {
        Item.find({featured: true})
        .select('-__v')
        .then(itemData => res.json(itemData))
        .catch(err => res.status(500).json({error: err}));
    },
    async addItem(req, res) {
        const request = {
            url: 'https://api.bricklink.com/api/store/v1/items/' + req.body.type + '/' + req.body.productId,
            method: 'GET'
        };
        const authHeader = Oauth1Helper.getAuthHeaderForRequest(request);
        
        const response = await axios.get(request.url, {headers: authHeader})
        if (!response.status === 200 || !response.data.data.name) return res.status(400).json(response.statusText === 'OK' ? {message: "This Lego Product ID was not found in bricklinks database!"} : [response.statusText, response.data.data] );
        const checkItemData = await Item.findOne({productName: response.data.data.name, colorId: req.body.colorId})
        if (checkItemData) return res.status(400).json({message: 'Item Already exists! Use item Update instead!', data: checkItemData})
        const index = colors.findIndex(color => color.color_id === req.body.colorId)
        Item.create(
            [{
                productName: response.data.data.name,
                productId: req.body.productId,
                colorId: req.body.colorId,
                colorName: colors[index].color_name,
                colorCode: colors[index].color_code,
                itemType: response.data.data.type,
                price: req.body.price,
                quantity: req.body.quantity,
                image: [response.data.data.image_url],
                itemWeight: parseFloat(response.data.data.weight),
                active: req.body.active,
                categoryId: response.data.data.category_id

            }],
            { new: true, runValidators: true })
            .then(async itemData => { // if the category of the item does not exist add it
                const categoryData = await Category.findOne({categoryId: itemData.categoryId})
                if (!categoryData) {
                    const category = categories.find(category => category.category_id === response.data.data.category_id);
                    Category.create({
                        categoryId: category.category_id,
                        categoryName: category.category_name
                    })
                }
                res.status(200).json(itemData)
            })
            .catch(err => res.status(500).json({error: err}));
    },
    updateItemInfo(req, res) {
        let changeObj = {}
        if(req.body.price) {
            changeObj.price = req.body.price
        }
        if (req.body.quantity || req.body.quantity === 0) {
            changeObj.quantity = req.body.quantity
        }
        if (req.body.image) {
            if (req.body.imageAdd) {
                changeObj.$push = { image: req.body.image }
            } else changeObj.$pull = { image: req.body.image }
        }
        if (req.body.condition) {
            changeObj.condition = req.body.condition
        }
        if (req.body.active) {
            changeObj.active = req.body.active
        }
        if (req.body.featured) {
            changeObj.featured = req.body.featured
        }
        if (!changeObj) {
            return res.json({message: 'You must enter at least one value to change!'})
        }
        Item.findOneAndUpdate(
            { _id: req.params.id },
            changeObj ,
            { new: true, runValidators: true })
            .then(itemData => {
                if (!itemData) {
                    res.status(204).json({ message: 'No item found with this Id!' })
                    return;
                }
                res.json(itemData);
            })
            .catch(err => res.status(500).json({error: err}));
    }
}

module.exports = itemController;