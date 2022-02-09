const mongoose = require('mongoose');

var key = new mongoose.Schema({
    key: String,
});

module.exports = mongoose.model('key', key);