const router = require('express').Router();
const { verifyTokenAdmin, verifyToken } = require('../../utils/auth')

const {
    guestAddOrder,
    getUserOrders,
    cancelOrder,
    allOrders,
    orderStatusReceived,
    orderStatus,
    updateOrderStatus

} = require('../../controllers/orderControllers');

router.route('/guest')
.post(guestAddOrder);

router.route('/user/')
.get(verifyToken, getUserOrders) //get user order history
.put(verifyToken, cancelOrder) //will only update if it has not been shipped

router.route('/admin')
.get(verifyTokenAdmin, allOrders)

router.route('/admin/received')
.get(verifyTokenAdmin, orderStatusReceived) //get all orders not yet addressed including return requests

router.route('/admin/orders') //all orders
.get(verifyTokenAdmin, orderStatus); //get orders by status req.body.status = Received, Shipped, Completed, Canceled, Returned

router.route('/admin/order/:id')
.put(verifyTokenAdmin, updateOrderStatus); // update an orders status

module.exports = router;