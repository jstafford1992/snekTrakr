'use strict';

require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const expressJWT = require('express-jwt');
const logger = require('morgan');


//Start app
const app = express();

//port setup
const port = process.env.PORT || 3000;

app.use(logger);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: false
}));
app.use(cors);






//Setup Error Handler
app.use(function(req, res, next){
  let err = new Error('Route not Found');
  err.status = 404;
  next(err);
});



//listen on port
app.listen(port, function(){
  console.log("Listening on: ", port);
});

//export
module.export = app;
