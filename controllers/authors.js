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


//Create route.
router.post('/', (req, res) => {
    Author.create(req.body)
        .then((createdAuthor) => {
            res.redirect('/authors')
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})

module.exports = router;