var express = require('express'),
    router = express.Router(),
    knex = require('../db/knex');

//homepage or blog route
router.get('/', function(req, res) {
  res.render('blog')
});

module.exports = router;
