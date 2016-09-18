'use strict';

const express = require('express');
const router = express.Router();
const knex = require('./db/knex');

//breeding

//get ALL
router.get('/', function(req, res, next){

  knex('breeding')
  .join('users', 'breeding.snake_id', 'users.snake_id')
  .where('user_id', req.user.id)
  .select('*')
  .then(function(data){
    console.log(data);
    res.json('Get All Pairings by female');
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });

});

//get by id
router.get('/:id', function(req, res, next){
  //TODO GET Breeding FOR snake

  knex('breeding')
  .select('*')
  .where('snake_id', req.params.id)
  .then(function(data){
    console.log(data);
    res.json("Get Pairing Data");
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });

});

//add breeding
router.post('/:id', function(req, res, next){
  //ADD NEW Breeding
  knex('breeding')
  .insert({
    snake_id: req.params.id,
    sire: req.body.sire,
    date_paired: req.body.date_paired
  })
  .then(function(data){
    console.log(data);
    res.json("Successfully Added New Pairing");
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });

});

//delete breeding
router.delete('/:id', function(req, res, next){
  //delete Breeding

  knex('breeding')
  .where('snake_id', req.params.id)
  .del()
  .then(function(data){
    console.log(data);
    res.json('Success');
  })
  .catch(function(err){
    res.status(500).json({
      err:err
    });
  });
});

module.exports = router;
