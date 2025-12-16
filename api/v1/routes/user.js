// user routes
const router = require('express').Router(); //express ספריית router ייבוא של ה 
const {getAllUsers,
  getUserById,
  addNewUser,
  updateUserById,
  deleteUserById
} = require('../controllers/user'); //controllers מתקיית user ייבוא באופן סלקטיבי של הפונקציות שנמצאות בקובץ

router.get('/',getAllUsers); // get all users
router.get('/:id',getUserById); // get user by id
router.post('/',addNewUser); // add a new user
router.put('/:id',updateUserById); // update a user by id
router.delete('/:id',deleteUserById); // delete a user by id

module.exports = router; // routes מתקיית user ייצוא קובץ 
