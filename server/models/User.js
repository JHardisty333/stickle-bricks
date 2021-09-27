const { Schema, model, Types } = require('mongoose');
const bcrypt = require('bcrypt');
// these should be Item and Order to reference correct
const Item = require('./Item');
const Order = require('./Order');

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        cart: [
            {
                _id: false,
                itemId: {type: Types.ObjectId, ref: 'Item', required: true},
                quantity: {type: Number, min: 1, default: 1},
                priceTotal: { type: Types.Decimal128, required: true },
                image: {type: String, required: true},
                productName: {type: String, required: true}
            }
        ],
        orders: [{
            type: Types.ObjectId,
            ref: 'Order'
        }],
        admin: {
            type: Boolean,
            default: false
        }
    },
    // set this to use virtual below
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password, passwordHash) {
    return bcrypt.compare(password, passwordHash);
};


const User = model('User', userSchema);

module.exports = User;
