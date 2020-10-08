const express=require('express');
const router=express.Router();
//@route Get
//@desc Tst
//@acess public
router.get('/',(req,res)=>{
    console.log(req.body);
    res.send('profile routes');
    
});
module.exports=router;