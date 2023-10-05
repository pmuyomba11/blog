const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const colors = require('colors');
const morgan = require('morgan');
const e = require('express');
//Initialization...
const app = express();


//Middleware
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));



//Listeners...
app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server Running on PORT:${PORT}....`.inverse.bold.blue);
    console.log('====================================');
})
