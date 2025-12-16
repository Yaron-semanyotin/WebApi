// category controllers
const categoryObj = {
  getAllCategories: (req,res)=>{ // get all categories
  return res.status(200).json({message: `Get all categories`});
},
getCategoryById: (req,res)=>{ // get category by id
  let id = req.params.id;
  return res.status(200).json({message: `Category ${id} was found`});
},
addNewCategory: (req,res)=>{ // post to add a new category
  return res.status(200).json({message: `A new category added`});
},
updateCategoryById: (req,res)=>{ // put to update a category
    let id = req.params.id;
  return res.status(200).json({message: `Category ${id} got updated`});
},
deleteCategoryById: (req,res)=>{ // delete to delete a category
  let id = req.params.id; //ומחזיק בו קח שאוכל להשתמש בו להדפסות id מבקש את הפרמטר של 
  return res.status(200).json({message: `Category ${id} got deleted`});
}
};

module.exports = categoryObj; // categoryObj ייצוא של אובייקט