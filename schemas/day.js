const mongoose = require('mongoose');

var day = new mongoose.Schema({
    id: String,
    createdAt: { type: Date, expires: '1440m', default: Date.now }
  });

module.exports = mongoose.model('day', day);