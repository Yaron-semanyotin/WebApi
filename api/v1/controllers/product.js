// product controller
const productObj = { //product אובייקט של הפעולות שנעשות על 
getAllProducts: (req,res)=>{ // get all products
  return res.status(200).json({message: `Get all products`});
},
getProductById: (req,res)=>{ // get product by id
  let id = req.params.id;
  return res.status(200).json({message: `Product ${id} was found`});
},
addNewProduct: (req,res)=>{ // post to add a new product
  return res.status(200).json({message: `A new product added`});
},
updateProductById: (req,res)=>{ // put to update a product
    let id = req.params.id;
  return res.status(200).json({message: `Product ${id} got updated`});
},
deleteProductById: (req,res)=>{ // delete to delete a product
  let id = req.params.id; //ומחזיק בו קח שאוכל להשתמש בו להדפסות id מבקש את הפרמטר של 
  return res.status(200).json({message: `Product ${id} got deleted`});
}
};

module.exports = productObj;// productObj ייצוא של אובייקט