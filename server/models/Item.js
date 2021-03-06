const { Schema, model, Types } = require('mongoose');

const itemSchema = new Schema(
    {
        productName: {
            type: String,
            required: true,
        },
        productId: {
            type: String,
            required: true
        },
        colorId: {
            type: Number,
            default: 0,
            required: false
        },
        colorName: {
            type: String,
            required: false
        },
        colorCode: {
            type: String,
            required: false
        },
        itemType: {
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
            default: 'Used', //used, new, if its a set though it can have used, new, with a sub category of complete / incomplete and or sealed
            required: true
        },
        date_added: {
            type: Date,
            default: Date.now
        },
        itemWeight: {
            type: Types.Decimal128,
            default: 0.00,
            required: false
        },
        active: {
            type: Boolean,
            default: false
        },
        featured: {
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

itemSchema.index({productName: 'text', productId: "text", colorName: "text" })
const Item = model('Item', itemSchema);

//this is used to update the index's
//Item.collection.dropIndexes((err, results) => console.log(err, results))

module.exports = Item;