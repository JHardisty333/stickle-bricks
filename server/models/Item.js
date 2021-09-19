const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
    {}
);

const Item = model('Item', itemSchema);

module.exports = Item;