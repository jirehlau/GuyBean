var mongoose = require('mongoose');
let Schema = mongoose.Schema;


var restaurantSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    name: String,
    registrationDate: Date,
    cuisineType: String,
    address: String,
    contactNumber: String, 
    paymentOptions: String,
    restaurantInfo: String,
    pictureURL: String,
    partnerReady: { type: Boolean, default: false},
  }, {
    timestamps: true
  });

let restaurantModel = mongoose.model('restuarantSchema', restaurantSchema)

module.exports = restaurantModel;