const USER = require('../models/usersModel');
const RESTAURANTMODEL = require('../models/restaurantsModel');


module.exports = {
  index,
  addFact,
  delFact,
  loggedIn,
  sushiOne,
  addRestaurants,
  addedRestaurant,
  forBusinesses,
  myRestaurants,
  aboutUs,
  contactUs,
  team,
  myRestaurantsDetails,
  homeCopy,
  myRestaurantTemplate,
};


async function homeCopy(req,res){
 let homePageCopy = await RESTAURANTMODEL.find();
  console.log('HOME PAGE COPY')
  console.log(homePageCopy)
  res.render('user/homeCopy', {homePageCopy: homePageCopy})
}

  async function myRestaurantTemplate(req,res){
   let template = await RESTAURANTMODEL.findById(req.params.id);
   console.log(req.params.id)
    res.render('restaurants/restaurantTemplate', {template: template})
  }

async function myRestaurants(req,res){
  let MyRestaurants = await RESTAURANTMODEL.find({userId: req.user._id});
  // console.log("RESTAURANT LIST")
  // console.log(MyRestaurants)
  res.render('restaurantUser/myRestaurants',{MyRestaurants: MyRestaurants})
}


 function myRestaurantsDetails(req, res) {
    RESTAURANTMODEL.findById(req.params.id, function(err, MyRestaurant) {
  //  console.log(MyRestaurant)
    res.render('restaurantUser/details', { title: 'My Restaurant Details', MyRestaurant});
  });
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
    cuisineType: req.body.cuisine,
    address: req.body.address,
    contactNumber: req.body.contactNumber, 
    paymentOptions: req.body.paymentOptions,
    pictureURL: req.body.pictureURL,
    restaurantInfo: req.body.comment,
    partnerReady: false,
    userId: req.user.id,
  })
  res.redirect('https://guybean-prototype.herokuapp.com/users/myRestaurants')
}



function sushiOne(req,res){
  res.render('restaurants/sushiOne')
}

// GUYBEAN SECTION CONTAINING THE ABOUT US PAGE, CONTACT US PAGE, AND TEAMS PAGE
function aboutUs(req,res){
  res.render('GuyBean/aboutUs')
}

function contactUs(req,res){
  res.render('GuyBean/contactUs')
}

function team(req,res){
  res.render('GuyBean/team')
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