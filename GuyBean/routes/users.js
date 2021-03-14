var router = require('express').Router();
var userCtrl = require('../controllers/user');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/home', userCtrl.index);

router.post('/facts', isLoggedIn, userCtrl.addFact);

router.delete('/facts/:id', userCtrl.delFact);

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');0
}

module.exports = router;
