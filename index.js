require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require("cors");
const mongoose = require('mongoose');


const {PORT, SECRET} = process.env; 
// App Object
const app = express();

//using cors with express
app.use(cors(
    // Only this domain can access the API 
    ))


// Middleware
app.use(express.json());



// Routes

const userRoutes = require("./src/routes/userRoutes")
app.use(userRoutes)


const shopRoutes = require("./src/routes/shopRoutes")
app.use("/shop",shopRoutes)

const productRoutes = require("./src/routes/productRoutes")
app.use("/product",productRoutes)


//MoongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/teoonetwelve").then(() => {
    console.log("Database connected....");
    
}).catch((res) => {
    console.log(res);
    console.log("Database not connected");
    
    
})


//Listening Port
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})