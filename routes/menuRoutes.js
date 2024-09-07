const express = require('express');
const router=express.Router();
const MenuItem=require('./../models/Menu');

//menu item 
router.post('/',async(req,res)=>{

    try{
      const data=req.body //assuming the request body conatains the person data
      const newMenu = new MenuItem(data);
      const response= await newMenu.save();
      res.status(200).json(response);
  
      }
      catch(err){
          console.log("error data is not saved");
          console.log(err);
          res.status(500).json({error:'Internal server Error'});
      }
    
  
  })
router.get('/',async(req,res)=>{
    try{
        const data=await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
})
router.get('/:tasteType',async(req,res)=>{
    try{
        const tasteType=req.params.tasteType;
        if(tasteType=="sweet" || tasteType=="spicy" || tasteType =="sour"){
            const data=await MenuItem.find({taste:tasteType});
            console.log('data fetched');
             res.status(200).json(data);
        }
        else{
            res.status(404).json({error:'Invaild choice'});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
})


module.exports=router;