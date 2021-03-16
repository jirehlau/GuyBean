var mongoose = require('mongoose');
let Schema = mongoose.Schema;


var userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    cohort: String,
    avatar: String,
    googleId: String
  }, {
    timestamps: true
  });

  let userModel = mongoose.model('userSchema', userSchema)

    module.exports = userModel;