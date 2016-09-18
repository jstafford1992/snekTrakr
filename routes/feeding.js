'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


//Get Feeding info by ID
router.get('/:id', function(req, res, next){
  knex('feeding')
  .select('*')
  .where('snake_id', req.params.id)
  .then(function(data){
    console.log(data);
    res.json("Get Feeding Data");
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });

});

//Add new feeding info
router.post('/', function(req, res, next){
  knex('feeding')
  .insert({
    snake_id: req.body.snake_id,
    rat_size: req.body.rat_size,
    successful: req.body.successful,
    attempted: req.body.attempted
  })
  .then(function(data){
    console.log(data);
    res.json("Added Feeding Info");
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });

});

//Update from attempted to successful
router.delete('/:id', function(req, res, next){

  knex('feeding')
  .where('snake_id', req.params.id)
  .del()
  .then(function(data){
    console.log(data);
    res.json("Deleted Feeding");
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });

});

module.exports = router;
