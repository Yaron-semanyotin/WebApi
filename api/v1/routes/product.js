// product routes
const router = require('express').Router(); //express ספריית router ייבוא של ה 
const {getAllProducts,
  getProductById,
  addNewProduct,
  updateProductById,
  deleteProductById
} = require('../controllers/product'); //controllers מתקיית product ייבוא באופן סלקטיבי של הפונקציות שנמצאות בקובץ

router.get('/',getAllProducts); // get all products
router.get('/:id',getProductById); // get product by id
router.post('/',addNewProduct); // add a new product
router.put('/:id',updateProductById); // update a product by id
router.delete('/:id',deleteProductById); // delete a product by id

module.exports = router; // routes מתקיית product ייצוא קובץ 
