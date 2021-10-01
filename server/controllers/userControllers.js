const { User, Order, Item } = require('../models');
const { signToken } = require('../utils/auth');

const userController = {
    // find all users 
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
        console.log(req.body)
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
        let userObj = {};
        if (req.body.name) {
            userObj.name = req.body.name;
        }
        if (req.body.email) {
            userObj.email = req.body.email;
        }
        if (req.body.password) {
            userObj.password = req.body.password;
        }
        if (!userObj) {
            return res.status(400).json({message: 'You must enter a value to update!'})
        }
        User.findOneAndUpdate(
            { _id: req.user._id },
            userObj,
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

    //check items in cart for changes at checkout
    async checkCart(req, res) {  
        const userData = await User.findById(req.user._id).select('-__v -password')
        try {
            let cartError = false
            let cartErrors = [];
            let updatedCart = [];
        for (let i = 0; i < userData.cart.length; i++) {
            const itemData = await Item.findById(userData.cart[i].itemId)
            if (itemData.quantity < userData.cart[i].quantity || parseFloat(itemData.price) != parseFloat(userData.cart[i].priceTotal) / userData.cart[i].quantity) { //if item quantity is lower that cart quantity change it
                if (itemData.quantity === 0) { //if its 0 just get rid of it
                    const cartData = await User.findOneAndUpdate({ _id: req.user._id },
                        {
                            $pull: {
                                cart: {
                                    itemId: itemData._id,
                                }
                            }
                        },
                        { runValidators: true, new: true })
                    cartError = true
                    updatedCart = cartData.cart;
                    cartErrors.push({issue: itemData.productName + ' is out of stock and has been removed from your cart.'});
                } else { //if not 0 just update it or if the price changed
                    await User.findOneAndUpdate({ _id: req.user._id },
                        {
                            $pull: {
                                cart: {
                                    itemId: itemData._id,
                                }
                            }
                        },
                        { runValidators: true, new: true })
                    const cartData = await User.findOneAndUpdate({ _id: req.user._id },
                        {
                            $push: {
                                cart: {
                                    itemId: itemData._id,
                                    quantity: (itemData.quantity < userData.cart[i].quantity) ? itemData.quantity : userData.cart[i].quantity,
                                    priceTotal: ((itemData.quantity < userData.cart[i].quantity) ? parseFloat(itemData.price) * itemData.quantity : parseFloat(itemData.price) * userData.cart[i].quantity),
                                    image: itemData.image[0],
                                    productName: itemData.productName
                                }
                            }
                        },
                        { runValidators: true, new: true })
                    cartError = true
                    updatedCart = cartData.cart;
                    (itemData.quantity < userData.cart[i].quantity) ? cartErrors.push({ issue: itemData.productName + ' no longer has the quantity you selected in stock. The quantity in your cart has been reduced to the current in stock quantity.' }) 
                    : null;
                    (parseFloat(itemData.price) != parseFloat(userData.cart[i].priceTotal) / userData.cart[i].quantity) ? cartErrors.push({ issue: itemData.productName + ' price has changed.' }) 
                    : null;
                }
            } else {
                await User.findOneAndUpdate({ _id: req.user._id },
                    {
                        $pull: {
                            cart: {
                                itemId: itemData._id,
                            }
                        }
                    },
                    { runValidators: true, new: true })
                const cartData = await User.findOneAndUpdate({ _id: req.user._id },
                    {
                        $push: {
                            cart: {
                                itemId: itemData._id,
                                quantity: userData.cart[i].quantity,
                                priceTotal: parseFloat(userData.cart[i].priceTotal),
                                image: itemData.image[0],
                                productName: itemData.productName
                            }
                        }
                    },
                    { runValidators: true, new: true })
                updatedCart = cartData.cart;
            }
        }
        if (cartError) res.status(409).json({cartErrors: cartErrors, cart: updatedCart});
        else res.status(200).json({cart: updatedCart});
        } catch {
            res.sendStatus(500);
        }
    },

    // Update cart / add to cart
    addToCart(req, res) {
        // req.body === itemId, quantity
        Item.findOne({_id: req.body.itemId})
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
                    subtotal = subtotal + parseFloat(userData.cart[i].priceTotal);
                }
                subtotal = subtotal + shipping;
                Order.create({
                    userId: req.user._id,
                    items: cart,
                    subtotal: subtotal, //includes shipping?
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
                                        Item.findOneAndUpdate({}, { quantity: (itemData.quantity - userData.cart[i].quantity) }, { runValidators: true, new: true })
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