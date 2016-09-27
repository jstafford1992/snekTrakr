'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const expressJwt = require('express-jwt');

function checkEmail(email){
  return knex('users').select('*').where({email: email});
}

router.post('/signup', function(req, res, next){
  var user = {
    email: req.body.email,
    password: req.body.password
  };

  var info = {
    email: req.body.email,
    passwordError: false,
    error: []
  };

  checkEmail(user.email).then(function(data){
    if(info.passwordError){
      // console.log(info.error.password);
      res.status(401).json(info.error.password);
      return;
    } else if (data.length >= 1) {
      console.log("Email already in use");
      res.status(401).json({message: "Email already in use"});
      return;
    } else {
      bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(req.body.password, salt, function(err, hash){
          knex('users').insert({
            email: req.body.email,
            password: hash
          })
          .returning('id')
          .then(function(id){
              var profile = {
                id: id[0],
                email: user.email
              };
              var token = jwt.sign(profile, process.env.SECRET);
              res.status(200).json({ token:token, id:profile.id });
          })
          .catch(function(err){
            res.status(500).json({err: err});
          });
        });
      });
    }
  });
});

router.post('/login', function(req, res, next){

  var user = {
    email: req.body.email,
    password: req.body.password
  };

  checkEmail(user.email).then(function(data){
    if(data.length === 0){
      res.status(401).json({message: "User does not exist."});
      return;
    } else {
      console.log(data[0].id);
      user.id = data[0].id;
      bcrypt.compare(user.password, data[0].password, function(err, result) {
        console.log(result);
        if (result === false) {
          res.status(401).send({message:'Incorrect email or password'});
          return;
        } else {
          var profile = {
            id: user.id,
            email: user.email
          };
          console.log(profile);
          var token = jwt.sign(profile, process.env.SECRET);
          res.status(200).json({ token:token, id:profile.id });
          // console.log(token);
        }
      });
    }
  });


});






module.exports = router;
