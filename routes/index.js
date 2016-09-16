'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const expressJwt = require('express-jwt');


//TODO make this route the home index.
router.get('/', function(req, res, next){

  knex('users').select('*').then(function(data){
    console.log("data: ", data);
    res.json(data);
  });
});

router.post('/singup', function(req, res, next){
  // knex('users').where('email', req.body.email)
});

router.post('/login', function(req, res, next){

  var user = {
    email: req.body.email,
    password: req.body.password
  };

  

});



function checkEmail(email){
  return knex('users').where({email: email});
}


module.exports = router;
