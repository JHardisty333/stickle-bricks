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
.put(verifyToken, updateUser)
.delete(verifyToken, deleteUser); // ✓

router.route('/login')
.post(userLogin); // ✓

router.route('/signup')
.post(createUser); // ✓

router.route('/cart')
.put(verifyToken, addToCart) // ✓
.delete(verifyToken, removeFromCart); // ✓

router.route('/order')
.post(verifyToken, addOrder); // ✓

module.exports = router;