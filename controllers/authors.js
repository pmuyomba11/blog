const express = require('express');
const Author = require('../models/authors')
const router = express.Router();


//Index Router
router.get('/', (req, res) => {
    Author.find({})
        .then((foundAurthors) => {
            res.render('authors/index.ejs', {
                authors: foundAurthors
            })
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})

//New Router
router.get('/new', (req, res) => {
    res.render('authors/new.ejs')
})

//Delete route...
router.delete('/:id', (req, res) => {
    Author.findByIdAndRemove(req.params.id)
        .then((authorToBeDeleted) => {
            res.redirect('/authors')
        })
        .catch((err) => {
            res.sendStatus(403);
        })
})

//Update route
router.put('/:id', (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((authorUpdate) => {
        res.redirect('/authors')
    })
    .catch((err) => {
        res.sendStatus(422)})
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

//Edit route
router.get('/:id', (req, res) => {
    Author.findById(req.params.id)
        .then((foundAuthor) => {
            res.render('authors/edit.ejs', {
                author: foundAuthor
            })
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})

//Show route
router.get('/:id', (req, res) => {
    Author.findById(req.params.id)
        .then((foundAuthor) => {
            res.render('authors/show.ejs', {
                author: foundAuthor
            })
        })
        .catch((err) => {
            res.status(501).json(err.message)
        })
})

module.exports = router;