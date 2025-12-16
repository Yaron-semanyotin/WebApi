// ip filters
module.exports = (req,res,next)=>{
  const allowIps =['::1','1.5.88.99']; // ממורשות לגישה לשרת ip רישום כתובות
  for(let i = 0; i < allowIps.length; i++){
    if(req.ip == allowIps[i]){
      return next();
    }
  }
  return res.status(401).json({message: `You are not authorized`});
};