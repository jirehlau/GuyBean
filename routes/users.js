var router = require('express').Router();
var userCtrl = require('../controllers/user');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('respond with a resource');
// });

router.get('/', userCtrl.index);

router.get('/loggedin',userCtrl.loggedIn);

router.get('/restaurantprofile',userCtrl.restaurantProfile)

router.get('/addrestaurant',userCtrl.addRestaurants)

router.get('/addedrestaurant', userCtrl.addedRestaurant)

router.get('/sushione',userCtrl.sushiOne)

router.post('/facts', isLoggedIn, userCtrl.addFact);

router.delete('/facts/:id', userCtrl.delFact);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');0
}

module.exports = router;
