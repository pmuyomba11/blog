const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const authorController = require('./controllers/authors')
const colors = require('colors');
const morgan = require('morgan');
const e = require('express');
//Initialization...
const app = express();


//Middleware
app.use(express.urlencoded({extended: true}));
app.use('/authors', authorController);
app.use(morgan('dev'));

//Routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})


//Listeners...
app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server Running on PORT:${PORT}....`.inverse.bold.blue);
    console.log('====================================');
})
