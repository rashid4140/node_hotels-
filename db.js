const mongoose= require('mongoose');
require('dotenv').config();

// define the mongo db connection URL
 //const mongoURL=process.env.MONGODB_URL_LOCAL;  // hotels is database name
const mongoURL=process.env.MONGODB_URL;


// Set up mongodb connection
mongoose.connect(mongoURL);
    

//Get the default connection
//Mongoose maintains a default connection object representing the MongoDb connection
const db= mongoose.connection;

//define event listener for database connection

db.on('connected',()=>{
    console.log('Connected to MongoDB server');
});

db.on('error',(err)=>{
    console.log('MongoDb connection error:', err);
});

db.on('disconnected',()=>{
    console.log('mongo db disconnected');
});

// Export the database connection
module.exports=db;



