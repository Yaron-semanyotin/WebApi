// category routes
const router = require('express').Router(); //express ספריית router ייבוא של ה 
const {getAllCategories,
  getCategoryById,
  addNewCategory,
  updateCategoryById,
  deleteCategoryById
} = require('../controllers/category'); //controllers מתקיית category ייבוא באופן סלקטיבי של הפונקציות שנמצאות בקובץ

router.get('/',getAllCategories); // get all categories
router.get('/:id',getCategoryById); // get category by id
router.post('/',addNewCategory); // add a new category
router.put('/:id',updateCategoryById); // update category by id
router.delete('/:id',deleteCategoryById); // delete category by id

module.exports = router; // routes מתקיית category ייצוא קובץ 