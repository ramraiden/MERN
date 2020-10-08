const express=require('express');
const router=express.Router();
//@route Get
//@desc Tst
//@acess public
router.get('/',(req,res)=>res.send('auth routes'));
module.exports=router;