// order routes
const router = require('express').Router(); //express ספריית router ייבוא של ה 
const {getAllOrders,
  getOrderById,
  addNewOrder,
  updateOrderById,
  deleteOrderById
} = require('../controllers/order'); //controllers מתקיית order ייבוא באופן סלקטיבי של הפונקציות שנמצאות בקובץ

router.get('/',getAllOrders); // get all orders
router.get('/:id',getOrderById); // get order by id
router.post('/',addNewOrder); // add a new order
router.put('/:id',updateOrderById); // update a order by id
router.delete('/:id',deleteOrderById); // delete a order by id

module.exports = router; // routes מתקיית order ייצוא קובץ 