const router = require('express').Router();
const OAuth =require('oauth');
const items = require('../../utils/items.json');
const fs = require('fs');

let itemsArray = items;
let i = 0;

router.get('/images', (req, res) => {
    const oauth = new OAuth.OAuth(
        '',
        '',
        '99F9560B878F49A1BB4AAF15122002EE',
        '36B44150878145CE99B7A15CA8A65BA0',
        '1.0',
        null,
        'HMAC-SHA1'
    );
    let obj;
    let itemType;
    console.log(i)
    switch (items.items[i].ITEMTYPE) {
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
    //aka fetch but with oath
    oauth.get(`https://api.bricklink.com/api/store/v1/items/${itemType}/${items.items[i].ITEMID}`,
        'E027EE7A5E224096881DB12161248CB5',
        'ED294BAB69D44A83A3EAB65287D12B73',
        (error, data) => {
            if (error) console.log(error);
            obj = JSON.parse(data);
            itemsArray.items[i].DESCRIPTION = obj.data.name
            i++;
            let json = JSON.stringify(itemsArray);
            fs.writeFile('./utils/items.json', json, (err) => {
                if (err) throw err;
                console.log('Update successful for index ' + i + '.')
            });
        });
        res.send(obj);
        
});

router.get('/test', async (req, res) => {
    let itemsList = [];
    for (let i = 0; i < ITEMS.length; i++) {
        console.log(i, ITEMS[i].LOTID)
        let colorObj = COLORS.find(({ color_id }) => color_id === parseInt(ITEMS[i].COLOR));
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