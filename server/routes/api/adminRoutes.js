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

router.get('/category', (req, res) => {
    let categoriesList = [];
    let tempIdList = [];
    for (let i = 0; i < ITEMS.length; i++) {
        console.log(i, ITEMS[i].LOTID);
        let categoryObj = CATEGORIES.find(({ category_id }) => category_id === parseInt(ITEMS[i].CATEGORY));
        let itemType;
        switch (ITEMS[i].ITEMTYPE) {
            case 'P':
                itemType = "PART";
                break;
            case 'M':
                itemType = "MINIFIG";
                break;
            case 'S':
                itemType = "SET";
                break;
            case 'B':
                itemType = "BOOK";
                break;
            case 'G':
                itemType = 'GEAR';
                break;
            case 'C':
                itemType = "CATALOG";
                break;
            case 'I':
                itemType = "INSTRUCTION";
                break;
            case 'U':
                itemType = "UNSORTED_LOT";
                break;
            case 'O':
                itemType = "ORIGINAL_BOX";
                break;
        }
        if (!tempIdList.includes(parseInt(ITEMS[i].CATEGORY))) {
            tempIdList.push(parseInt(ITEMS[i].CATEGORY));
            let obj = {
                categoryId: categoryObj.category_id,
                categoryName: categoryObj.category_name,
                itemType: itemType
            }
            categoriesList.push(obj);
        }
    }
    categoriesList = categoriesList.sort((a, b) => (a.categoryId > b.categoryId) ? 1 : ((b.categoryId > a.categoryId) ? -1 : 0))
    const jsonData = JSON.stringify(categoriesList);
    writeFile('utils/categorySeed.json', jsonData, (err) => {
        if (err) throw err;
        console.log('File Created Successfully');
        res.sendStatus(200);
    });
});

router.get('/test', (req, res) => {
    let itemsList = [];
    for (let i = 0; i < ITEMS.length; i++) {
        console.log(i, ITEMS[i].LOTID)
        let colorObj = COLORS.find( ({ color_id }) => color_id === parseInt(ITEMS[i].COLOR));
        
        let itemType;
        switch (ITEMS[i].ITEMTYPE) {
            case 'P':
                itemType = "PART";
                break;
            case 'M':
                itemType = "MINIFIG";
                break;
            case 'S':
                itemType = "SET";
                break;
            case 'B':
                itemType = "BOOK";
                break;
            case 'G':
                itemType = 'GEAR';
                break;
            case 'C':
                itemType = "CATALOG";
                break;
            case 'I':
                itemType = "INSTRUCTION";
                break;
            case 'U':
                itemType = "UNSORTED_LOT";
                break;
            case 'O':
                itemType = "ORIGINAL_BOX";
                break;
        }
        let obj = {
            productName: ITEMS[i].DESCRIPTION,
            productId: ITEMS[i].ITEMID,
            colorId: colorObj ? colorObj.color_id : 0,
            colorName: colorObj ? colorObj.color_name : 0,
            colorCode: colorObj ? colorObj.color_code : 0,
            itemType: itemType,
            price: ITEMS[i].PRICE,
            quantity: ITEMS[i].QTY,
            image: [ITEMS[i].IMAGE], 
            itemWeight: parseInt(ITEMS[i].ITEMWEIGHT),
            active: true,
            categoryId: categoryObj.category_id,
            categoryName: categoryObj.category_name
        }
        itemsList.push(obj);
    }
    const jsonData = JSON.stringify(itemsList);
    writeFile('utils/itemSeed.json', jsonData, (err) => {
        if (err) throw err;
        console.log('File Created Successfully');
        res.sendStatus(200);
    });
});

module.exports = router;