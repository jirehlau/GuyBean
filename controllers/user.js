const USER = require('../models/usersModel');
const RESTAURANTMODEL = require('../models/restaurantsModel');


module.exports = {
  index,
  addFact,
  delFact,
  loggedIn,
  restaurantProfile,
  sushiOne,
  addRestaurants,
  addedRestaurant,
  forBusinesses,
  myRestaurants,
  aboutUs,
};

function myRestaurants(req,res){
  res.render('restaurantUser/myRestaurants')
}

function forBusinesses(req,res){
  res.render('forBusinesses.ejs')
}
function addRestaurants(req,res){
  res.render('restaurantUser/addRestaurant')
}

async function addedRestaurant(req,res){
  console.log(req.body)
  await RESTAURANTMODEL.create ({
    name: req.body.title,
    registrationDate: req.body.releaseYear,
    cuisineType: req.body.Cuisine,
    restaurantInfo: req.body.comment,
    partnerReady: false,
  })
  res.render('restaurantUser/addedRestaurant')
}

function restaurantProfile(req,res){
  res.render('restaurantUser/restaurantProfile')
}

function sushiOne(req,res){
  res.render('restaurants/sushiOne')
}

// GUYBEAN SECTION CONTAINING THE ABOUT US PAGE, CONTACT US PAGE, AND TEAMS PAGE
function aboutUs(req,res){
  res.render('GuyBean/aboutUs')
}



function index(req, res, next) {
  console.log(req.query)
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  let sortKey = req.query.sort || 'name';
  USER.find(modelQuery)
  .sort(sortKey).exec(function(err, students) {
    if (err) return next(err);
    res.render('user/home', {
      students,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
} 

function loggedIn(req, res, next) {
  console.log(req.query)
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  let sortKey = req.query.sort || 'name';
  USER.find(modelQuery)
  .sort(sortKey).exec(function(err, students) {
    if (err) return next(err);
    res.render('user/homeLoggedIn', {
      students,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
} 


function addFact(req, res, next) {
  req.user.facts.push(req.body);
  req.user.save(function(err) {
    res.redirect('/user/homeLoggedIn');
  });
}

function delFact(req, res, next) {
  USER.findOne({'facts._id': req.params.id}, function(err, student) {
    student.facts.id(req.params.id).remove();
    student.save(function(err) {
      res.redirect('/user/homeLoggedIn');
    });
  });
}


