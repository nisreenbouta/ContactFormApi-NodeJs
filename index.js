const express = require('express')
const db = require('mongoose');
const app = express();
const {create,getAll,getById, deleteContact}= require('./Controllers/contactController');

app.use(express.json());

app.listen(3000, () => {
    try {
        db.connect('mongodb://localhost:27017/practice')
        return console.log('start the server');
    } catch (error) {
        console.log(error);
    }
})

app.post('/api/contact', create);

app.get('/api/contact', getAll);

app.get('/api/contact/:id', getById);

app.delete('/api/contact/:id', deleteContact);

