var mongoose = require('mongoose');
let Schema = mongoose.Schema;

var GuyBeanSchema = new Schema({
    text: String
  }, {
    timestamps: true
  });

  let GuyBeanModel = mongoose.model('GuyBean', GuyBeanSchema)


// const addedRestaurantSchema = new Schema({
//   restaurantName: {
//   type: String,
//   required: true
// },
//   registrationDate: {
//     type: Date,
//     default: function(){
//       return new Date().getFullYear();
//     }
//   },
//   cuisineType: String,
//   information: [String],
//   reviews: [GuyBeanSchema],
// }, {
//     timestamps: true,
// })

//   let restaurantsModel = mongoose.model('restAddition', addedRestaurantSchema)

//   module.exports = restaurantsModel


