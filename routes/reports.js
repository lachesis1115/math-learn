var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Report = mongoose.model('Report');

/* GET users listing. */
router.get('/get', function(req, res, next) {
  var user = JSON.parse(req.cookies.loginUser);
  Report.find({ name: user.name }, 'name title accuracy point rank', function (err, docs) {
    if (err) {
      res.json({
        resultCode: 1,
        reports: []
      });
    } else {
      res.json({
        resultCode: 0,
        reports: docs
      });
    }
  });
});

router.post('/save', function(req, res, next) {
  var user = JSON.parse(req.cookies.loginUser);
  var data = {
    title: req.body.title,
    name: user.name,
    accuracy: req.body.accuracy,
    point: req.body.point,
    rank: req.body.rank
  };
  Report.update({ name: user.name, title: req.body.title }, {$set: data}, {upsert: true}, function (err, docs) {
    if (err) {
      res.json({
        resultCode: 1
      });
    } else {
      res.json({
        resultCode: 0
      });
    }
  });
});

module.exports = router;
