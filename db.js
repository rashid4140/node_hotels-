const mongoose= require('mongoose');

// define the mongo db connection URL
const mongoURL='mongodb://localhost:27017/hotels'  // hotels is database name

// Set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

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



