const { request } = require('express');
const express=require('express');
const router=express.Router()
const signUpTemplateCopy =require('../models/SignUpModels')
const bcrypt=require('bcrypt')
  


router.post('/signup',async(req,res)=>{

    const saltPassword=await bcrypt.genSalt(10)
    const saltConfirmPassword=await bcrypt.genSalt(10)
    const securePassword=await bcrypt.hash(req.body.password,saltPassword)
    const secureConfirmPassword=await bcrypt.hash(req.body.password,saltConfirmPassword)

    const signedUpUser =new signUpTemplateCopy({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        password:securePassword,
    })
   signedUpUser.save()
   .then(data=>{
       res.json(data)
   })
   .catch(error=>{
       res.json(error)
   })
})

router.post('/login',async(req,res)=>{

   const loginemail=req.body.email;
   const loginpassword=req.body.password;

   console.log(loginemail);
   console.log(loginpassword);
})



module.exports=router