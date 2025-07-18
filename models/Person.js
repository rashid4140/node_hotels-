const mongoose = require('mongoose');

// Define the Person Schema
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef', 'waiter', 'manager'], // yahi 3 value main se koi ek hona chahiye work main
        required:true

    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    address:{
        type:String,
    

    },
    salary:{
        type:Number,
        required:true
    }
});

// create person model
const Person=mongoose.model('Person',personSchema);
module.exports=Person;
