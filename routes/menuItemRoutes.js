const express = require('express');
 const router = express.Router();

 const MenuItem = require('./../models/MenuItem');

 router.post('/', async (req, res) => {
  try {
    const data = req.body;  // Get data from request body

    // Create new MenuItem using the schema
    const newMenuItem = new MenuItem(data);

    // Save to MongoDB
    const savedItem = await newMenuItem.save();

    console.log('New menu item saved:', savedItem);
    res.status(201).json(savedItem);  // 201 = Created
  } catch (error) {
    console.error('Error saving menu item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find(); // Fetch all documents
    res.status(200).json(items);
  } catch (err) {
    console.error('Error fetching menu items:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:tasteItem', async(req,res)=>{
    try{
       const tasteItem=req.params.tasteItem;
       if(tasteItem=='sweet' || tasteItem=='spicy' || tasteItem=='sour'){
        const responce= await MenuItem.find({taste:tasteItem});
        console.log('responce fetched');
        res.status(200).json(responce);
       }
       else{
        res.status(404).json({error:'Invalid work type'});
       }

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal server error'});
 }

    }
    );

module.exports = router;


