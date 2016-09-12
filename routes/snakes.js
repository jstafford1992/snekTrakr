'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const knex = require('../db/knex');

//will be routed here successful login

router.get('/', function(req, res, next){
  //TODO will get all snakes and list them out for the user to view.

  res.send('HELLO JIMMY!');

});



router.get('/:id', function(req, res, next){
  //TODO will list individual snake for detailed report
  res.send('Hello STEPHANIE!');
});

router.post('/', function(req, res, next){
  //TODO create new snakes

  //Should re-route to the snakes page
});

router.put('/:id', function(req, res, next){
  //TODO update snake details

  //should re-route to the snakes page
});

router.delete('/:id', function(req, res, next){
  //TODO delete snake

  //should re-route to the getAll snake page
});



module.exports = router;
