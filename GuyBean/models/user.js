var mongoose = require('mongoose');
var factSchema = new mongoose.Schema({
    text: String
  }, {
    timestamps: true
  });