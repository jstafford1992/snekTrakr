'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

//TODO make this route the home index.
router.get('/', function(req, res, next){
  // res.JSON('blah', 'AHHHHH');
  res.send('HELLO JEREMY!');
  // res.end();
});


module.exports = router;
