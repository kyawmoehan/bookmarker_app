const express = require('express');
const mongoose = require('mongoose');
const bookMarkRouter = require('./route/bookmarker');
const app = new express();
const PORT = process.env.PORT || 3000;

// connect to mongodb
const MONGODB_URI = "mongodb+srv://bookmarker_app:<password>@bookmarker-zythc.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

// handle json 
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// static file
app.use(express.static('./public'));

// router for bookmarker
app.use('/', bookMarkRouter);

// port
app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server running on port ${PORT}`);
});
