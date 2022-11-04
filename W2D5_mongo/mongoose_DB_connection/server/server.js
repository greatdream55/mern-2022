const express = require("express");
const mongoose = require('mongoose');
const app = express();
const PORT = 8000;

// middleware
app.use(express.json(), express.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost/friday')
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));

app.listen(PORT, () => console.log(`🎈🎈🎈 server up on port ${PORT}`))