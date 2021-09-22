const { User, Order } = require('../models');

const orderController = {
// add order for guest
    guestAddOrder({params, body}, res) {
        Order.create({
            items: cart,
            bill: body.bill,
            name: body.name,
            address: body.address,
            email: body.email,

        }).then(orderData => res.status(200).json({message: 'Order created successfully', data: orderData}))
            .catch(err => res.json(err));
    },
    orderStatusShipped({params}, res) {
        Order.findOneAndUpdate({_id: body.order_id}, {shipped: true})
        .then(orderData => res.status(200).json(orderData))
            .catch(err => res.json(err));
    },
    //find all orders that are not complete,
    //find all order that are complete,
    orderStatus({params}, res) {
        Order.findAll({complete: params.complete})
        .then(orderData => res.json(orderData))
            .catch(err => res.json(err));
    }

}

module.exports = orderController;