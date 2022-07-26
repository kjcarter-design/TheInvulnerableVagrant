; const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const app = express();

app.use(express.json());
app.use('/books', router);


mongoose.connect('mongodb+srv://kjCarter:Polkmn93@bookstore1.cplvz.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('Connected To Database')).then(() => { app.listen(5000); }).catch((err) => console.log(err));