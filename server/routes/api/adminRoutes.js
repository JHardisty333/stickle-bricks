const router = require('express').Router();
const ITEMS = require('../../utils/items.json');
const COLORS = require('../../utils/colors.json');
const CATEGORIES = require('../../utils/categories.json');
const { writeFile } = require('fs');

// const { 
//     contactAdmin
// } = require('../../controllers/adminControllers');
// const { verifyToken } = require('../../utils/auth');

// router.route('/contact')
// .post(verifyToken, contactAdmin)

router.get('/test', async (req, res) => {
    let itemsList = [];
    for (let i = 0; i < ITEMS.length; i++) {
        let colorObj = COLORS.find( function({ color_id }) { color_id === parseInt(ITEMS[i].COLOR)});
        let categoryObj = CATEGORIES.find( ({ category_id }) => category_id === parseInt(ITEMS[i].CATEGORY));
        con
        let obj = {
            productName: ITEMS[i].DESCRIPTION,
            productId: ITEMS[i].ITEMID,
            colorId: colorObj.color_id,
            colorName: colorObj.color_name,
            colorCode: colorObj.color_code,
            price: ITEMS[i].PRICE,
            quantity: ITEMS[i].QTY,
            image: [ITEMS[i].IMAGE],
            active: true,
            categoryId: categoryObj.category_id,
            categoryName: categoryObj.category_name
        }
        itemsList.push(obj);
    }
    const jsonData = JSON.stringify({itemsList})
    writeFile('../../utils/itemSeed.json', jsonData, (err) => {
        if (err) throw err;
        console.log('File Created Successfully');
        res.sendStatus(200);
    });
});

module.exports = router;