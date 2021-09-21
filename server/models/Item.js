const { Schema, model } = require('mongoose');
const Category = require('./Category');


const itemSchema = new Schema(
    {
        product_name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true

        },
        quantity: {
            type: Number,
            required: true
        },
        date_added: {
            type: Date,
            default: Date.now
        },
        categoryId: [Category]
    }
);

const Item = model('Item', itemSchema);

module.exports = Item;