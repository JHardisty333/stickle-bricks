const { Schema, model, Types } = require('mongoose');
const Item = require('./Item');

// Figure out how to have a guest as default if not wanting to sign in with user info
const orderSchema = new Schema(
    {
        userId: [User],
        items: [Item],
        bill: {
            type: Types.Decimal128,
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
    }
);

const Order = model('Order', orderSchema);

module.exports = Order;