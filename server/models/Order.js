const { Schema, model } = require('mongoose');

// Figure out how to have a guest as default if not wanting to sign in with user info
const orderSchema = new Schema(
    {
        userId: [User],
        items: [{
            productId: {
                type: String,
            },
            name: String,
            quantity: {
                type: Number,
                required: true,
                min: [1, 'Quantity can not be less then 1.']
            },
            price: Number
        }],
        bill: {
            type: Number,
            required: true
        },
        date_added: {
            type: Date,
            default: Date.now
        },
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        shipped: {
            type: Boolean,
            default: false
        },
        complete: {
            type: Boolean,
            default: false
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Order = model('Order', orderSchema);

module.exports = Order;