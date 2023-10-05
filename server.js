const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT;
const authorController = require('./controllers/authors');
const mongoose = require('mongoose');
const colors = require('colors');
const morgan = require('morgan');
const e = require('express');
//Initialization...
const app = express();
//Database connection;
const db = mongoose.connection;

//DATABASE CONFIGS..
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//Middleware
app.use(express.urlencoded({ extended: true }));
app.use('/authors', authorController);
app.use(morgan('dev'));



//Routes
app.get('/', (req, res) => {
    res.render('index.ejs')
})


//DATABASE ERROR/SUCCESS MSGS...
db.on('connected', () => console.log(`DATABASE is connected`));
db.on('disconnected', () => console.log(`Database is disconnected`));
db.on('error', (err) => console.log(err.message, + ' is db configured, right?'))
//Listeners...
app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server Running on PORT:${PORT}....`.inverse.bold.blue);
    console.log('====================================');
})
