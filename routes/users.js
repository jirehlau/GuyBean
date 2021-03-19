var router = require('express').Router();
var userCtrl = require('../controllers/user');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('respond with a resource');
// });

router.get('/', userCtrl.index);

router.get('/homecopy',userCtrl.homeCopy);

router.get('/homecopy/:id',userCtrl.myRestaurantTemplate);

router.get('/loggedin',userCtrl.loggedIn);

router.get('/addrestaurant',userCtrl.addRestaurants)
router.post('/addrestaurant', userCtrl.addedRestaurant)

router.get ('/forBusinesses',userCtrl.forBusinesses)

router.post('/myrestaurants',userCtrl.myRestaurants)

router.get('/myrestaurants/:id',userCtrl.myRestaurantsDetails)

router.get('/sushiOne',userCtrl.sushiOne)



router.post('/facts', isLoggedIn, userCtrl.addFact);

router.delete('/facts/:id', userCtrl.delFact);

// GUYBEAN SECTION CONTAINING THE ABOUT US PAGE, CONTACT US PAGE, AND TEAMS PAGE

router.get ('/aboutus',userCtrl.aboutUs)
router.get('/contactus',userCtrl.contactUs)
router.get('/team',userCtrl.team)

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');0
}

module.exports = router;
