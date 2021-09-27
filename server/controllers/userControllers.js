const { User, Order, Item } = require('../models');
const { signToken } = require('../utils/auth');

const userController = {
    // find all users => for future of adding more admin
    getAllUsers(req, res) {
        User.find({})
        .populate({path: 'cart.itemId'})
        .select('-__v -password')
            .then(dbUserData => res.status(200).json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // login with email and password
    userLogin(req, res) {
        User.findOne({ 
            email: req.body.email
         })
            .select('-__v')
            .then(async (dbUserData) => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this email!' });
                    return;
                }
                const passwordValid = await dbUserData.isCorrectPassword(req.body.password, dbUserData.password);
                if (passwordValid) {
                    const token = signToken(dbUserData);
                    res.status(200).json(token);
                } else {
                    res.status(400).json({message: 'Incorrect password'})
                }     
            })
            .catch(err => {
                console.log(err);
                res.status(400);
            })
    },

    // Create new user
    createUser({ body }, res) {
        User.create(
            [{
                name: body.name,
                email: body.email,
                password: body.password
            }], 
            {new: true, runValidators: true})
            .then(dbUserData => {
                const token = signToken(dbUserData);
                res.status(200).json(token);
            })
            .catch(err =>{console.log(err); res.status(500).json(err)});
    },

    // Update user by ID
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.id },
            {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            },
            { new: true, runValidators: true })
            .select('-__v -password')  
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                if (req.user._id === dbUserData._id) {
                    const token = signToken(dbUserData);
                    res.status(200).json([dbUserData, token]);
                } else res.status(403).json({message: 'You do not have permissions to update another users information!'});
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    // delete user **Add an auth to deleting a user
    deleteUser(req, res) {
        if (req.user._id === req.params.id || req.user.admin === true) {
            User.findOneAndDelete({ _id: req.params.id })
                .then(dbUserData => res.status(200).json({ message: 'This user was deleted!' }))
                .catch(err => res.status(500).json(err));
        } else res.status(403).json("You do not have permissions to delete other users!");
        
    },

    // Update cart
    addToCart(req, res) {
        // req.body === itemId, quantity
        Item.findById(req.body.itemId)
        .then(itemData => {
            if (!itemData) return res.status(400).json({message: 'Item not found!'});
            if (itemData.quantity < req.body.quantity) return res.status(400).json({message: 'You can not add a quantity higher than the current in stock quantity!'});
            User.findOneAndUpdate(
                { _id: req.params.id },
                { $push: {
                        cart: {
                            itemId: req.body.itemId,
                            quantity: req.body.quantity,
                            priceTotal: (parseFloat(itemData.price) * req.body.quantity),
                            image: itemData.image[0],
                            productName: itemData.productName
                        }
                    }
                }, 
                { runValidators: true, new: true })
                .then(cartData => res.status(200).json({ message: 'Cart updated!', cart: cartData.cart }))
                .catch(err => res.status(500).json(err));
        })
        .catch(err => res.status(500).json(err));
    },

    // delete from cart
    removeFromCart(req, res) { //needs to be updated to pull correctly from new schema layout
        User.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { cart: req.body.itemId } })
            .then(cartData => res.status(200).json({ message: 'Cart updated!', cart: cartData.cart }))
            .catch(err => res.status(500).json(err));
    },

    // add order to logged in user. 
    addOrder(req, res) { // need to reduce stock quantity of all items in the cart at the time of creating the order
        User.findOne({ _id: req.user._id })
            .then(userData => {
                if (!userData) {
                    res.status(404).json({ message: 'User Not Found!' });
                    return;
                }
                let cart = userData.cart //need to make sure it will work with new schema
                if(!cart) {
                    res.status(404).json({message: 'Must add items to your cart'})
                }
                Order.create({
                    userId: req.user._id,
                    items: cart,
                    bill: body.bill,
                    name: userData.name,
                    address: body.address,
                    email: userData.email,
                })
                    .then(orderData => {
                        User.findOneAndUpdate(
                            { _id: req.user._id },
                            { cart: [], $push: { order: orderData._id } })
                            .then(orderData => res.status(200).json({ message: 'Order Completed' }))
                            .catch(err => res.status(500).json(err))
                    })
                    .catch(err => res.status(500).json(err))
            })
            .catch(err => res.status(500).json(err));
    }

}

module.exports = userController;