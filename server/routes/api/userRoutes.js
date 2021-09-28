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
    changeQuantity
} = require('../../controllers/userControllers');

router.route('/')
.get(verifyTokenAdmin, getAllUsers);

router.route('/login')
.post(userLogin);

router.route('/signup')
.post(createUser)

router.route('/:id')
.put(verifyToken, updateUser)
.delete(verifyToken, deleteUser)

router.route('/cart/:id')
.put(verifyToken, addToCart)
.delete(verifyToken, removeFromCart)
.put(verifyToken, changeQuantity)

module.exports = router;