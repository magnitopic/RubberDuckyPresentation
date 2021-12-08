const mongoose = require('mongoose');
const schema= mongoose.Schema;

const gmailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Gmail = mongoose.model('Gmail', gmailSchema);
module.exports = Gmail; 