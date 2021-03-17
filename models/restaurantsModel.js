var mongoose = require('mongoose');
let Schema = mongoose.Schema;


var restaurantSchema = new Schema({
    name: String,
    registrationDate: Date,
    cuisineType: String,
    restaurantInfo: String,
    partnerReady: { type: Boolean, default: false},
  }, {
    timestamps: true
  });

  let restaurantModel = mongoose.model('restuarantSchema', restaurantSchema)

    module.exports = restaurantModel;