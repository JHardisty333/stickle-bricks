const { Schema, model } = require('mongoose');

const purchaseSchema = new Schema(
    {}
);

const Purchase = model('Purchase', purchaseSchema);

module.exports = Purchase;