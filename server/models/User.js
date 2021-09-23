const { Schema, model } = require('mongoose');
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
        cart: [{
            type: Schema.Types.ObjectId,
            ref: 'Item',
            default: undefined
        }],
        orders: [{
            type: Schema.Types.ObjectId,
            ref: 'Order',
            default: undefined
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
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;
