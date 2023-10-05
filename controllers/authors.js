const express = require('express');
const Author = require('../models/authors')
const router = express.Router();


//Index Router
router.get('/', (req, res) => {
    res.render('authors/index.ejs')
})

//New Router
router.get('/new', (req, res) => {
    res.render('authors/new.ejs')
})

module.exports = router;