const db = require('./connection');
const { Item } = require('../models');
const itemInfo = require('../utils/items.json');

db.once('open', async() => {

    const items = await Item.insertMany([
        itemInfo
    ]);

    console.log('items seeded');

    process.exit();
})