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
        description: {
            type: String,
            required: true,
        },
        color: {
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
        // conditions: [
        //     {
        //         new: Number,
        //         used: Number,
        //         damaged: Number
        //     }
        // ],
        date_added: {
            type: Date,
            default: Date.now
        },
        active: {
            type: Boolean,
            default: false
        },
        categoryId: [{
            type: Schema.Types.ObjectId,
            ref: 'Category',
            default: undefined
        }]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Item = model('Item', itemSchema);

module.exports = Item;