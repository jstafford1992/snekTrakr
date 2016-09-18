'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const knex = require('../db/knex');


//ACCOUNT PAGE
router.get('/:id', function(req, res, next){
  //TODO get USER information

  knex('users').select('*').where('id', req.user.id).then(function(data){
    console.log(data);
    res.json('Get user Information');
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });

});


router.put('/:id', function(req, res, next) {
  //TODO update USER information Mostly PASSWORD info

  var account = {

  };

  knex('users')
  .select('*')
  .where('id', req.user.id)
  .update(account)
  .then(function(data){
    console.log(data);
    res.json('Updated Account');
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });

});



router.delete('/:id', function(req, res, next){
  //TODO delete USER information

  knex('users')
  .where('id', req.user.id)
  .del()
  .then(function(data){
    console.log(data);
    res.json('Account Deleted');
    //Force Log Out and refresh page
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });

});


module.exports = router;
