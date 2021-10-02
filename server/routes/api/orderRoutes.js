const router = require('express').Router();
const { verifyTokenAdmin, verifyToken } = require('../../utils/auth')

const {
    checkGuestCart,
    guestAddOrder,
    getUserOrders,
    cancelOrder,
    allOrders,
    orderStatus,
    updateOrderStatus

} = require('../../controllers/orderControllers');

router.route('/guest')
.post(guestAddOrder) // ✓
.put(checkGuestCart);

router.route('/user/')
.get(verifyToken, getUserOrders) //get user order history
.put(verifyToken, cancelOrder) //will only update if it has not been shipped

router.route('/admin')
.get(verifyTokenAdmin, allOrders) //all orders

router.route('/admin/orders/:status') 
.get(verifyTokenAdmin, orderStatus); //get orders by status req.params.status = Received, Shipped, Completed, Canceled, Refunded

router.route('/admin/order/:id')
.put(verifyTokenAdmin, updateOrderStatus); // update an orders status

module.exports = router;