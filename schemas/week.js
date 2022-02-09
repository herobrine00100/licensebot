const mongoose = require('mongoose');

var week = new mongoose.Schema({
    id: String,
    createdAt: { type: Date, expires: '10080m', default: Date.now }
  });

module.exports = mongoose.model('week', week);