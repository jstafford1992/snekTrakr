'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//breeding

//get ALL
router.get('/', function(req, res, next){

  knex('breeding')
  .join('snakes', 'breeding.snake_id', 'snakes.id')
  .where('snakes.user_id', req.user.id)
  .select('*')
  .then(function(data){
    console.log(data);
    res.json(data);
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
    res.json(data);
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });

});

//add breeding
router.post('/', function(req, res, next){
  //ADD NEW Breeding
  knex('breeding')
  .insert({
    snake_id: req.body.snake_id,
    sire: req.body.sire,
    date_paired: req.body.date_paired
  })
  .then(function(data){
    console.log(data);
    res.json(data);
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
  .where('id', req.params.id)
  .del()
  .then(function(data){
    console.log(data);
    res.json(data);
  })
  .catch(function(err){
    res.status(500).json({
      err:err
    });
  });
});

module.exports = router;
