const mongoose = require('mongoose');
 
const CartoonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3
    },
    genre: {
        type: String,
        default: "cartoon"
    },
    episodes: {
        type: Number
    }
}, {timestamps: true});
 
const Cartoon = mongoose.model('Cartoon', CartoonSchema);
 
module.exports = Cartoon;