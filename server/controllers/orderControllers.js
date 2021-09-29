const { User, Order } = require('../models');

const orderController = {
// add order for guest
    guestAddOrder(req, res) { //need to add changing the item counts on the site
        //need to do extra error handling because their is no add to cart functions for guests
        Order.create({
            items: req.body.cart,
            bill: req.body.bill,
            name: req.body.name,
            address: req.body.address,
            email: req.body.email,
        })
        .then(orderData => res.status(200).json({message: 'Order created successfully', data: orderData}))
        .catch(err => res.status(400).json(err));
    },

    getUserOrders(req, res) {
        Order.find({userId: req.params.id})
        .populate('Item')
        .then(orderData => {
            if (!orderData) {
                res.status(404).json({message: 'User Not Found!'});
                return;
            }
            if (req.user._id === orderData.userId) {
                res.status(200).json(orderData);
            } else res.status(403).json({message: 'You do not have permission to access this data!'})
        })
        .catch(err => res.sendStatus(500))
    },

    cancelOrder(req, res) {  //will only update if it has not been shipped
        Order.findOne({_id: req.body.id})
        .then(orderData => {
            if (req.user._id === orderData.userId) {
                if (orderData.status === 'Received') {
                    Order.findOneAndUpdate({_id: orderData._id}, {status: 'Cancelled'})
                    .then(orderData => {
                        res.status(200).json({message: 'Your order has been cancelled'});
                    }).catch(err => res.status(500).json(err));
                } else res.status(409).json({message: 'This order has already been shipped or otherwise has been altered by the store owner. Please contact the store owner to discuss getting this order canceled or refunded.'})
            } else res.status(403).json({message: 'You do not have permissions to cancel this order!'});
        }) .catch(err => res.status(500).json(err));
    },
    
    allOrders(req, res) {
        Order.find({})
        .then(orderData => res.status(200).json(orderData))
        .catch(err => res.status(500).json(err));
    },

    orderStatusReceived(req, res) {
        Order.find({status: 'Received'})
        .then(orderData => {
            if (!orderData) {
                res.status(404).json({ message: "No orders found with that status" });
                return;
            }
                res.status(200).json(orderData);
            })
        .catch(err => res.status(500).json(err));
    },

    orderStatus(req, res) {
        Order.findAll({status: req.body.status})
            .then(orderData => {
                if(!orderData) {
                    res.status(404).json({message: "No orders found with that status"});
                    return;
                }
                res.status(200).json(orderData)
            })
            .catch(err => res.status(500).json(err));
    },

    updateOrderStatus(req, res) {
        Order.findOneAndUpdate(
            {_id: req.body.id}, 
            {status: req.body.status})
            .then(orderData => {
                if(!orderData) {
                    res.status(204).json({message: 'No order found with this ID!'})
                    return;
                }
                res.json(orderData)
            })
            .catch(err => res.status(500).json(err))
    },

}

module.exports = orderController;