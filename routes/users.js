'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const knex = require('../db/knex');

// can post here for new user creation
router.post('/', function(req, res, next){
  //TODO CREATE NEW USER????

});

//May not need this general user page
router.get('/', function(req, res, next) {
  res.send("HELLO USER PAGE");

});

//ACCOUNT PAGE
router.get('/:id', function(req, res, next){
  //TODO get USER information


  res.send("Specific USER INFO");
});


router.put('/:id', function(req, res, next) {
  //TODO update USER information

  //Should re-route to user page
  
});



router.delete('/:id', function(req, res, next){
  //TODO delete USER information

  //Should re-route to home and logout
});


module.exports = router;
