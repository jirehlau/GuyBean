const USER = require('../models/user');

module.exports = {
  index,
  addFact,
  delFact,
  loggedIn,
  restaurantProfile,
  sushiOne,
};

function restaurantProfile(req,res){
  res.render('restaurantUser/restaurantProfile')
}

function sushiOne(req,res){
  res.render('restaurantUser/sushiOne')
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
