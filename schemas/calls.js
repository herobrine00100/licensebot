const mongoose = require('mongoose');

var calls = new mongoose.Schema({
    callid: String,
    messageid: String,
    channelid: String,
    code: Boolean,
});

module.exports = mongoose.model('calls', calls);