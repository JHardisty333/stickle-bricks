const router = require('express').Router();
const { verifyTokenAdmin } = require('../../')

const {
    guestAddOrder,
    orderStatusShipped,
    orderStatus

} = require('../../controllers/orderControllers');

router.route('/guest')
.post(guestAddOrder);

router.route('/admin/shipping')
.put(verifyTokenAdmin, orderStatusShipped);

router.route('/admin/orders')
.get(verifyTokenAdmin, orderStatus);

module.exports = router;