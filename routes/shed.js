'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//Get Shed by ID
router.get('/:id', function(req, res, next){

  knex('shed')
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

//Add Shed info by ID
router.post('/', function(req, res, next){

  knex('shed')
  .insert({
    snake_id: req.body.snake_id,
    date_shed: req.body.date_shed,
    prelay: req.body.prelay
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

router.delete('/:id', function(req, res, next){

  knex('shed')
  .where('id', req.params.id)
  .del()
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



module.exports = router;
