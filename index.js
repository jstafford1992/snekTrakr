'use strict';

require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const expressJWT = require('express-jwt');
const logger = require('morgan');
const knex = require('./db/knex');
const helmet = require('helmet');
const path = require('path');
const favicon = require('serve-favicon');

//require routes
const index = require('./routes/index');
const snakes = require('./routes/snakes');
const users = require('./routes/users');
const clutches = require('./routes/clutches');

//Start app
const app = express();

//port setup
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false
}));
app.use(cors());
app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')));

app.use('/', index);
app.use(expressJWT({secret: process.env.SECRET}));
app.use('/user', users);
app.use('/snakes', snakes);
app.use('/clutches', clutches);

//Setup Error Handler
// app.use(function(req, res, next){
//   let err = new Error('Route not Found');
//   err.status = 404;
//   next(err);
// });



//listen on port
app.listen(port, function(){
  console.log("Listening on: ", port);
});

//export
module.exports = app;
