/*
 * Initial setup of all needed modules
 */
var express = require('express');
var app = express();
var mongoose = require('mongoose');

var database = require('./config/database');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect(database.localDBURL);

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride('X-HTTP-Method-Override'));

require('./app/routes.js')(app);

app.listen(process.env.PORT || 8003);
console.log("Server is listening...");
