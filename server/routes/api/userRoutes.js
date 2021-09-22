const router = require('express').Router();
const { User, Order } = require('../../models');
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addToCart,
    removeFromCart
} = require('../../controllers/userControllers');

router.route('/')
.get(getAllUsers)

router.route('/login')
.post(getUserById);

router.route('/signup')
.post(createUser)

router.route('/:id')
.put(updateUser)
.delete(deleteUser)

module.exports = router;