const mongoose = require('mongoose');

var month = new mongoose.Schema({
    id: String,
    createdAt: { type: Date, expires: '43200m', default: Date.now }
  });

module.exports = mongoose.model('month', month);