var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var api = require('./api');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("./twits", api.getTwit);

app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
