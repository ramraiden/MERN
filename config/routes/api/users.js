const express=require('express');
const router=express.Router();
const {check,validationResult}=require('express-validator/check');
console.log(process.cwd)
const User=require('D:\\MERN\\models\\user');
//@route Get
//@desc Tst
//@access publicjjjjjjjjj
router.post('/',[check('name','name is required').not().isEmpty()],
(req,res)=>{
    console.log(req.body);
   const errors=validationResult(req);
   if(!errors.isEmpty()){
       console.log("Eror value" + errors)
       return res.status(400).json({errors:errors.array()})
   }    
   const{name,email,password}=req.body;
try{
    let user=await User.findOne({email});

    if(user){
        res.status(400).json({errors:[{msg:'user exists'}]});
    }
}










    res.send('user routes')});
module.exports=router;