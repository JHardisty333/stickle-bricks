const db = require('./connection');
const { Item, Category, User } = require('../models');
const itemSeed = require('../utils/itemSeed.json');
const categorySeed = require('../utils/categorySeed.json');
const faker = require('faker');

db.once('open', async() => {
    // MUST DELETE WHEN DONE TESTING!
    await Item.deleteMany({});
    await Category.deleteMany({});
    await User.deleteMany({});

    await Item.insertMany(itemSeed);
    console.log('Items Seeded');

    await Category.insertMany(categorySeed);
    console.log('Categories Seeded');
    
    const userData = [];

    for (let i = 0; i < 50; i += 1) {
        const name = faker.name.findName();
        const email = faker.internet.email(name);
        const password = faker.internet.password();

        userData.push({ name, email, password });
    }

    await User.insertMany(userData);
    await User.create({
        name: 'admin',
        email: 'testAdmin@test.com',
        password: 'Password',
        admin: true
    });
    console.log('Users Seeded');
    process.exit();
})