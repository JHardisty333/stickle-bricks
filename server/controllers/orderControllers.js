const { User, Order } = require('../models');

const orderController = {
// add order for guest
    guestAddOrder(req, res) {
        Order.create({
            items: req.body.cart,
            bill: req.body.bill,
            name: req.body.name,
            address: req.body.address,
            email: req.body.email,

        }).then(orderData => res.status(200).json({message: 'Order created successfully', data: orderData}))
            .catch(err => res.status(500).json(err));
    },
    orderStatusShipped({params}, res) {
        Order.findOneAndUpdate({_id: body.order_id}, {shipped: true})
        .then(orderData => res.status(200).json(orderData))
            .catch(err => res.status(500).json(err));
    },
    //find all orders that are not complete,
    //find all order that are complete,
    orderStatus({params}, res) {
        Order.findAll({complete: params.complete})
            .then(orderData => res.status(200).json(orderData))
            .catch(err => res.status(500).json(err));
    }

}

module.exports = orderController;