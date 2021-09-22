const { User, Order } = require('../models');

const userController = {
    // find all users => for future of adding more admin
    getAllUsers(req, res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    // Find by single user
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .select('__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            })
    },

    // Create new user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    // Update user by ID
    updateUser(authMiddleware,{ params, body }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            {
                email: body.email,
                password: body.password
            },
            { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    // delete user **Add an auth to deleting a user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => res.json({ message: 'This user was deleted!' }))
            .catch(err => res.json(err));
    },

    // Update cart
    addToCart(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { cart: req.body.item_id } })
            .then(dbCartData => res.json({ message: 'Cart updated!' }))
            .catch(err => res.json(err));
    },

    // delete from cart
    removeFromCart(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { cart: req.body.item_id } })
            .then(dbCartData => res.json({ message: 'Cart updated!' }))
            .catch(err => res.json(err));
    },

    // add order to logged in user. 
    addOrder({ params, body }, res) {
        User.findOne({ _id: params.id })
            .then(userData => {
                let cart = userData.cart
                Order.create({
                    userId: params.id,
                    items: cart,
                    bill: body.bill,
                    name: userData.name,
                    address: body.address,
                    email: userData.email,

                })
                    .then(orderData => {
                        User.findOneAndUpdate(
                            { _id: params.id },
                            { cart: [], $push: { order: orderData._id } })
                            .then(orderData => res.json({ message: 'Order Completed' }))
                            .catch(err => res.json(err))
                    })
                    .catch(err => res.json(err))

            })
            .catch(err => res.json(err))


    }

}

module.exports = userController;