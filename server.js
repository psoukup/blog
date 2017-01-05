var express = require('express'),
    app = express(),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

app.use('view engine', 'ejs');
app.use(express.static(__dirname = "/public"));
