const { Schema, model } = require('mongoose');


const categorySchema = new Schema(
    {
        categoryId: {
            type: Number,
            required: true,
            unique: true
        },
        categoryName: {
            type: String,
            required: true
        }
    }
);

const Category = model('Category', categorySchema);

module.exports = Category;