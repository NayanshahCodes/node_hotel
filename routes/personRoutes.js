const express = require('express');
const router=express.Router();
const Person=require('./../models/person');

router.post('/',async(req,res)=>{

    try{
      const data=req.body //assuming the request body conatains the person data
      const newPerson = new Person(data);
      // newPerson.name=data.name;
      // newPerson.age=data.age;
      // newPerson.mobile=data.mobile;
      // newPerson.email=data.email;
      // newPerson.address=data.address
      const response= await newPerson.save();
      console.log('data is saved');
      res.status(200).json(response);
  
      }
      catch(err){
          console.log("error data is not saved");
          console.log(err);
          res.status(500).json({error:'Internal server Error'});
      }
    
  
  })
  // get method for person
  router.get('/',async(req,res)=>{
    try{
        const data=await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
})

// get method for person for spacific work type
router.get('/:worktype',async(req,res)=>{
    try{
        const workType=req.params.worktype;
        if(workType=="chef" || workType=="manager" || workType=="waiter"){
            const data=await Person.find({work:workType});
            console.log('data fetched');
            res.status(200).json(data);

        }
        else{
            res.status(404).json({error:'Invalid choice'})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
})

//update method in person

router.put('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const updatedPersonData=req.body;
        
        const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,
            runValidators:true,// run validation is mongodb
        })
        if(!response){
            return res.status(404).json({error:' Person is not found'})
        }
        console.log('data is updated');
        res.status(200).json(response)
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const personId =req.params.id; // Extract person id from the url
         // Assuming you have person model

         const response=await Person.findByIdAndDelete(personId);
         if(!response){
            return res.status(404).json({error:' Person is not found'})
        }
        console.log('data is deleteded');
        res.status(200).json({message:'Person Deleted successfully'});

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
})
module.exports=router;