const mongoose = require('mongoose');

const bookmarkerSchema = mongoose.Schema({
    name: String,
    url: String
}, {collection : 'bookmarkers'});

module.exports = mongoose.model('Bookmarker', bookmarkerSchema);