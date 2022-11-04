const mongoose = require('mongoose');
 
const CartoonSchema = new mongoose.Schema({
    title: String,
    genre: String,
    episodes: Number
}, {timestamps: true});
 
const Cartoon = mongoose.model('Cartoon', CartoonSchema);
 
module.exports = Cartoon;