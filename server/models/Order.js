const { Schema, model, Types } = require('mongoose');

// Figure out how to have a guest as default if not wanting to sign in with user info
const orderSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            default: undefined
        },
        items: [{}],
        subtotal: {
            type: Types.Decimal128,
            required: false
        },
        total: {
            type: Types.Decimal128,
            required: false
        },
        date_added: {
            type: Date,
            default: Date.now
        },
        name: {
            type: String,
            required: false
        },
        address: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: false,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        status: { //Received, Shipped, Completed, Cancelled, Refunded
            type: String,
            default: 'Received',
            required: false
        } 
    }
);

const Order = model('Order', orderSchema);

module.exports = Order;