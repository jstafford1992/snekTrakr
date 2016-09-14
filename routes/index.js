'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const knex = require('../db/knex');


//TODO make this route the home index.
router.get('/', function(req, res, next){
  // res.send('HELLO JEREMY!');
  knex('users').select('*').then(function(data){
    console.log("data: ", data);
    res.json(data);
  });
});


module.exports = router;
