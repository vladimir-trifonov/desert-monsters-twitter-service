var express = require('express');
var api = require('./api');

var app = express();

app.get("/twits/:group", api.getTwit);

app.listen(process.env.PORT || 3000);