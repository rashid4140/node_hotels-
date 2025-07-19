const express = require('express');
const app = express();
const db=require('./db');
require('dotenv').config();


const bodyParser= require('body-parser');
app.use(bodyParser.json());  //req.body

const PORT=process.env.PORT || 3000;





app.get('/', (req, res) => {
  res.send('Hello World')
})








 // Import the router files

 const personRoutes = require('./routes/personRoutes');

 // Use the routers

 app.use('/person', personRoutes)

 const menuItemRoutes= require('./routes/menuItemRoutes');

 app.use('/menu', menuItemRoutes);

 

app.listen(PORT,()=>{
    console.log("listining at port 3000"); 
})

