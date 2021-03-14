const Student = require('../models/users');

module.exports = {
  index,
  addFact,
  delFact
};



function index(req, res, next) {
  console.log(req.query)
  let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
  let sortKey = req.query.sort || 'name';
  Student.find(modelQuery)
  .sort(sortKey).exec(function(err, students) {
    if (err) return next(err);
    res.render('users/index', {
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
    res.redirect('/users');
  });
}

function delFact(req, res, next) {

}
