var mongoose = require('mongoose');
let Schema = mongoose.Schema;

var GuyBeanSchema = new Schema({
    text: String
  }, {
    timestamps: true
  });

  let GuyBeanModel = mongoose.model('GuyBean', GuyBeanSchema)

  module.exports = GuyBeanModel