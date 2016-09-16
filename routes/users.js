'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const knex = require('../db/knex');


//ACCOUNT PAGE
router.get('/:id', function(req, res, next){
  //TODO get USER information


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
