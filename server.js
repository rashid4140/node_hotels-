const express = require('express');
const app = express();
const db=require('./db');

const bodyParser= require('body-parser');
app.use(bodyParser.json());  //req.body





app.get('/', (req, res) => {
  res.send('Hello World')
})








 // Import the router files

 const personRoutes = require('./routes/personRoutes');

 // Use the routers

 app.use('/person', personRoutes)

 const menuItemRoutes= require('./routes/menuItemRoutes');

 app.use('/menu', menuItemRoutes);

app.listen(3000,()=>{
    console.log("listining at port 3000"); 
})

