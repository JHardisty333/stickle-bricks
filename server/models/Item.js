const { Schema, model, Types } = require('mongoose');
const Category = require('./Category');


const itemSchema = new Schema(
    {
        product_name: {
            type: String,
            required: true,
        },
        productId: {
            type: String,
            required: true
        },
        colorId: {
            type: Number,
            required: true
        },
        colorName: {
            type: String,
            required: true
        },
        colorCode: {
            type: String,
            required: true
        },
        price: {
            type: Types.Decimal128,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 0
        },
        image: {
            type: Array,
            default: [],
            required: true
        },
        condition: {
            type: String,
            default: 'Used',
            required: true
        },
        date_added: {
            type: Date,
            default: Date.now
        },
        active: {
            type: Boolean,
            default: false
        },
        categoryId: {
            type: Number,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Item = model('Item', itemSchema);

module.exports = Item;