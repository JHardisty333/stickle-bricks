const { Order, Item } = require('../models');


const orderController = {
// add order for guest

    async checkGuestCart(req, res) {
        try {
            const cart = req.body.cart;
            let cartError = false;
            let cartErrors = [];
            let updatedCart = req.body.cart;
            for (let i = 0; i < cart.length; i++) {
                const itemData = await Item.findById(cart[i].itemId);
                if (!itemData) return res.status(400).json({message: 'Item ' + cart[i].productName + ' not found!'})
                if (itemData.quantity < cart[i].quantity || parseFloat(itemData.price) != cart[i].priceTotal / cart[i].quantity) { //if item quantity is lower that cart quantity change it
                    if (itemData.quantity === 0) { //if its 0 just get rid of it
                        cartError = true
                        const index = updatedCart.findIndex(item => item.itemId === cart[i].itemId)
                        updatedCart = updatedCart.splice(index, 1);
                        cartErrors.push({ issue: itemData.productName + ' is out of stock and has been removed from your cart.' });
                    } else { //if not 0 just update it 
                        cartError = true
                        if (itemData.quantity < cart[i].quantity) {

                            cartErrors.push({ issue: itemData.productName + ' no longer has the quantity you selected in stock. The quantity in your cart has been reduced to the current in stock quantity.' })
                        }
                        if (parseFloat(itemData.price) != parseFloat(cart[i].priceTotal) / cart[i].quantity) {

                            cartErrors.push({ issue: itemData.productName + ' price has changed.' })
                        }
                        const index = updatedCart.findIndex(item => item.itemId === cart[i].itemId);
                        let tempCartItem = {
                            itemId: itemData._id,
                            quantity: (itemData.quantity < cart[i].quantity) ? itemData.quantity : cart[i].quantity,
                            priceTotal: ((itemData.quantity < cart[i].quantity) ? parseFloat(itemData.price) * itemData.quantity : parseFloat(itemData.price) * cart[i].quantity),
                            image: itemData.image[0],
                            productName: itemData.productName
                        }
                        updatedCart.splice(index, 1);
                        updatedCart.push(tempCartItem);
                    }
                } 
            }
            if (cartError) res.status(409).json({ cartErrors: cartErrors, cart: updatedCart });
            else res.status(200).json({ cart: updatedCart });
        } catch {
            res.sendStatus(500);
        }
    },

    guestAddOrder(req, res) { 
       
    },

    async getUserOrders(req, res) {
        const orderData = await Order.find({userId: req.user._id}).populate('Item')
            if (!orderData) {
                res.status(404).json({message: 'User Not Found or User has no orders!'});
                return;
            }
            res.status(200).json(orderData);
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

    orderStatus(req, res) {
        Order.findAll({status: req.body.status})
            .then(orderData => {
                if(!orderData) {
                    res.status(404).json({message: "No orders found with that status"});
                } else {
                    res.status(200).json(orderData)
                }
            })
            .catch(err => res.status(500).json(err));
    },

    updateOrderStatus(req, res) {
        const status = req.body.status;
        if (status === 'Received' || status === 'Shipped' || status === 'Completed' || status === 'Cancelled' || status === 'Refunded') {
            Order.findOneAndUpdate(
                { _id: req.body.id },
                { status: status })
                .then(orderData => {
                    if (!orderData) {
                        res.status(204).json({ message: 'No order found with this ID!' });
                    }  else {
                        res.json(orderData)
                    }  
                })
                .catch(err => res.status(500).json(err))
        } else req.status(400).json({ message: status + ' is not a valid status type! Status must = Received, Shipped, Completed, Cancelled, or Refunded.'})
        
    },
}

module.exports = orderController;