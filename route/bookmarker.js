const express = require('express');
const Bookmarker = require('../model/bookmarkerModel');
const bookMarkRouter = express.Router();


bookMarkRouter.get('/', (req, res) => {
    Bookmarker.find({}, (err, data) => {
        if(err) throw err;
        res.render('index', {links: data});
    });
});

bookMarkRouter.post('/', (req, res) => {
    const newBookmarker = new Bookmarker(req.body).save((err, data) => {
        if(err) throw err;
        res.json(data);
    });
});

bookMarkRouter.delete('/:name', (req, res) => {
    Bookmarker.find({name: req.params.name}).deleteOne((err, data) => {
        if(err) throw err;
        res.json(data);
    });
});

module.exports = bookMarkRouter;