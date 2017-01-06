var express = require('express'),
    router = express.Router(),
    knex = require('../db/knex');

//homepage or blog route
router.get('/', function(req, res) {
  res.send('This Index Route is Working')
});

module.exports = router;
