// user controller
const userObj = { //user אובייקט של הפעולות שנעשות על 
getAllUsers: (req,res)=>{ // get all users
  return res.status(200).json({message: `Get all users`});
},
getUserById: (req,res)=>{ // get user by id
  let id = req.params.id;
  return res.status(200).json({message: `User ${id} was found`});
},
addNewUser: (req,res)=>{ // post to add a new user
  return res.status(200).json({message: `A new user added`});
},
updateUserById: (req,res)=>{ // put to update a user
    let id = req.params.id;
  return res.status(200).json({message: `User ${id} got updated`});
},
deleteUserById: (req,res)=>{ // delete to delete a user
  let id = req.params.id; //ומחזיק בו קח שאוכל להשתמש בו להדפסות id מבקש את הפרמטר של 
  return res.status(200).json({message: `User ${id} got deleted`});
}
};

module.exports = userObj;// userObj ייצוא של אובייקט