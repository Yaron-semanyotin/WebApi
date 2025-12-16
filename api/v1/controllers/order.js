// order controllers
const orderObj = {
  getAllOrders: (req,res)=>{ // get all orders
  return res.status(200).json({message: `Get all orders`});
},
getOrderById: (req,res)=>{ // get order by id
  let id = req.params.id;
  return res.status(200).json({message: `Order ${id} was found`});
},
addNewOrder: (req,res)=>{ // post to add a new order
  return res.status(200).json({message: `A new order added`});
},
updateOrderById: (req,res)=>{ // put to update a order
    let id = req.params.id;
  return res.status(200).json({message: `Order ${id} got updated`});
},
deleteOrderById: (req,res)=>{ // delete to delete a order
  let id = req.params.id; //ומחזיק בו קח שאוכל להשתמש בו להדפסות id מבקש את הפרמטר של 
  return res.status(200).json({message: `Order ${id} got deleted`});
}
};

module.exports = orderObj;// orderObj ייצוא של אובייקט