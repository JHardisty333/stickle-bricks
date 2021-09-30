const { User, Order, Item } = require('../models');
const { signToken } = require('../utils/auth');

const userController = {// ✓
    // find all users ✓
    getAllUsers(req, res) {
        User.find({})
           // .populate('orders')
            .select('-__v -password -id')
            .then(dbUserData => res.status(200).json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(500);
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
                } else res.status(400).json({ message: 'Incorrect password' });
            })
            .catch(err => res.status(500).json({error: err}))
    },

    // Create new user
    createUser({ body }, res) {
        User.create(
            [{
                name: body.name,
                email: body.email,
                password: body.password
            }],
            { new: true, runValidators: true })
            .then(userData => {
                const token = signToken(userData[0]);
                res.status(200).json(token);
            })
            .catch(err => res.status(500).json({message: 'A user with this email already exists. Please login or use a different email.', error: err}));
    },

    // Update user by ID
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.user._id },
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
                const token = signToken(dbUserData);
                res.status(200).json([dbUserData, token]);
            })
            .catch(err => res.status(500).json({error: err}))
    },

    // delete user 
    deleteUser(req, res) {
            User.findOneAndDelete({ _id: req.user._id })
                .then(userData => {
                    if (!userData) return res.status(400).json({ message: 'This user does not exist!' })
                    res.status(200).json({ message: 'This user was deleted!' })
                })
                .catch(err => res.status(500).json({error: err})); ;

    },

    // Update cart / add to cart
    addToCart(req, res) {
        // req.body === itemId, quantity
        Item.findById( req.body.itemId)
        .then(itemData => {
            if (!itemData) return res.status(400).json({message: 'Item not found!'});
            if (itemData.quantity < req.body.quantity) return res.status(400).json({message: 'You can not add a quantity higher than the current in stock quantity!'});
            User.findById(req.user._id)
            .then(userData => {      
                if (userData.cart.find( ({productName}) => productName === itemData.productName)) {
                    if (!userData) return res.status(400).json({ message: 'User not found!' });
                    User.findOneAndUpdate({ _id: req.user._id },
                        {
                            $pull: {
                                cart: {
                                    itemId: req.body.itemId,
                                }
                            }
                        },
                        { runValidators: true, new: true })
                        .then(cartData => {
                            User.findOneAndUpdate({ _id: req.user._id },
                                {
                                    $push: {
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
                                .catch(err => res.status(500).json({error: err})); ;
                        })
                        .catch(err => res.status(500).json({error: err})); ;
                } else {
                    User.findOneAndUpdate(
                        { _id: req.user._id },
                        {
                            $push: {
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
                        .catch(err => res.status(500).json({error: err})); 
                }   
            })
            .catch(err => res.status(500).json({error: err}));
        }).catch(err => res.status(500).json({message: 'Item Not found', error: err}));
    },

    // delete from cart
    removeFromCart(req, res) {
        Item.findById(req.body.itemId)
            .then(itemData => {
                if (!itemData) return res.status(400).json({ message: 'Item not found!' });
                User.findOneAndUpdate(
                    { _id: req.user._id },
                    {
                        $pull: {
                            cart: {
                                itemId: req.body.itemId,
                            }
                        }
                    },
                    {new: true}
                    )
                    .then(cartData => {
                        if (!cartData) return res.status(400).json({ message: 'User not found!' });
                        res.status(200).json({ message: 'Cart updated!', cart: cartData.cart })
                    })
                    .catch(err => res.status(500).json({ error: err }));
            }).catch(err => res.status(500).json({ message: 'Item not found!', error: err }));
    },

    // add order to logged in user. 
    addOrder(req, res) { 
        User.findOne({ _id: req.user._id })
            .then(userData => {
                if (!userData) return res.status(404).json({ message: 'User Not Found!' });
                const cart = userData.cart;
                if (!cart) return res.status(404).json({ message: 'Must add items to your cart' });
                let subtotal = 0.00;
                let shipping = 4.50;
                for (let i = 0; i < cart.length; i++ ) {
                    subtotal = subtotal + parseFloat(cart[i].priceTotal);
                }
                subtotal = subtotal + shipping;
                console.log(userData.email, subtotal, req.body.address)
                Order.create({
                    userId: req.user._id,
                    items: cart,
                    subtotal: subtotal, //includes shipping?
                    // total: req.body.total, //includes taxes and shipping, not currently required
                    name: userData.name,
                    address: req.body.address,
                    email: userData.email,
                }, { new: true, runValidators: false})
                    .then(orderData => {
                        console.log(orderData)
                        User.findOneAndUpdate(
                            { _id: req.user._id },
                            { cart: [], $push: { orders: orderData[0]._id }},{new:true})
                            .then(orderData => {
                                //send receipt email
                                //change inventory quantities
                                for (let i = 0; i < cart.length; i++) {
                                    Item.findOne({_id: cart[i].itemId}).then(itemData => {
                                        Item.findOneAndUpdate({}, { quantity: (itemData.quantity - cart[i].quantity) }, { runValidators: true, new: true })
                                        .then(itemData => console.log(itemData))
                                        .catch(err => console.log(err));
                                    })
                                }
                                res.status(200).json({ message: 'Order Completed' });
                            })
                            .catch(err => res.status(500).json({error: err})); 
                    })
                    .catch(err => res.status(500).json({error: err})); 
            })
            .catch(err => res.status(500).json({error: err}));
    }

}

module.exports = userController;