const mongoose = require('mongoose');

const lifetime = new mongoose.Schema({
    id: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('lifetime', lifetime);