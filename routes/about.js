var express = require('express'),
    router = express.Router(),
    knex = require('../db/knex');

router.get('/', function(req, res) {
  res.render('about');
});

module.exports = router;
