var mongoose = require('mongoose');
let Schema = mongoose.Schema;


var restaurantSchema = new Schema({
    name: String,
    registrationDate: Date,
    cuisineType: String,
    restaurantInfo: String,
    partnerReady: Boolean,
  }, {
    timestamps: true
  });

  let restaurantModel = mongoose.model('restuarantSchema', restaurantSchema)

    module.exports = restaurantModel;