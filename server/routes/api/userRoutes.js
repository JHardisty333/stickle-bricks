const router = require('express').Router();
const { verifyTokenAdmin, verifyToken } = require('../../utils/auth')
const {
    getAllUsers,
    userLogin,
    createUser,
    updateUser,
    deleteUser,
    addToCart,
    removeFromCart,
    addOrder 
} = require('../../controllers/userControllers');

router.route('/')
.get(verifyTokenAdmin, getAllUsers) // ✓
.put(verifyToken, updateUser) //  - body: {name: <users name>, <email>, password: <password> }
.delete(verifyToken, deleteUser); // ✓ - will delete the user who is logged in, users past orders will still be visible by admin

router.route('/login')
.post(userLogin); // ✓ - body: {email: <email>, password: <password>}

router.route('/signup')
.post(createUser); // ✓ - body: {name: <users name>, <email>, password: <password> }

router.route('/cart') // only adds or removes from cart of user that is logged in / thats jwt is passed
.put(verifyToken, addToCart) // ✓ - both adds and updates cart items, must pass itemId, and quantity, regardless
// body: {"itemId": "6153c18e6730b99f5123d3f1","quantity": 1}
.delete(verifyToken, removeFromCart); // ✓ - only include itemId in body

router.route('/order')
.post(verifyToken, addOrder); // ✓ 
// body: {"total": 7.03,"address": "this is my address"}

module.exports = router;