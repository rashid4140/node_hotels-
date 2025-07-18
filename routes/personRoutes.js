 const express = require('express');
 const router = express.Router();

 const Person=require('./../models/person');

 router.post('/',async(req,res)=>{
  try{
    const data =req.body;// assuming the req.body contains the persons data

    // create a new Person document using the mongoode model
    const newPerson= new Person(data);

    // save the new person to the database
    const response= await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'});
  }

})

router.get('/', async(req,res)=>{
  try{
    const data= await Person.find();
    console.log('data fetched');
    res.status(200).json(data);
}
catch(err){
  console.log(err);
  res.status(500).json({error: 'Internal server error'});
}
})

router.get('/:workType', async (req, res) => {
 try {
 const workType = req.params.workType; // Extract the work type from the URL parameter
 if(workType=='chef'  || workType == 'manager'  || workType == 'waiter'){
  const responce = await Person.find({work: workType});
  console.log('responce fetched');
  res.status(200).json(responce);
 }else{
  res.status(404).json({error:'Invalid work type'});
 }
 
 } catch (err) {
 console.log(err);
 res.status(500).json({error: 'Internal server error'});
 }
});

router.put('/:id', async (req,res) => {
    try{
    const personId=req.params.id;
    const updatedPersonData=req.body;

    const responce=await Person.findByIdAndUpdate(personId,updatedPersonData, {
        new:true, // return the updated document
        runValidators:true // Run Mongoose Validation
    })
    if (!responce) {
    return res.status(404).json({ error: 'Person not found' })

    }
    console.log('data updated');
    res.status(200).json(responce);
}
catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'});

}

})

 router.delete('/:id', async (req, res) => {
 try {
 const personId = req.params.id; 
 
 // Assuming you have a Person model
const deletedPerson = await Person.findByIdAndDelete(personId);
 if (!deletedPerson) {
 return res.status(404).json({ error: 'Person not found' });
 }
 console.log('data deleted');
 // Send a success message as a JSON response
 res.status(200).json({ message: 'Person deleted successfully' });
 } catch (error) {
 console.error('Error deleting person:', error);
 res.status(500).json({ error: 'Internal server error' })
 }
 })

module.exports = router;



