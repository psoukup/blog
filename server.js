var express = require('express'),
    app = express(),
    methodOverride = require('method-override'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    index = require('./routes/index'),
    about = require('./routes/about'),
    contact = require('./routes/contact'),
    portfolio = require('./routes/portfolio');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use('/', index);
app.use('/about', about);
app.use('/contact', contact);


app.listen(process.env.PORT || 3000, function() {
  console.log('Listening on Port 3000');
});
