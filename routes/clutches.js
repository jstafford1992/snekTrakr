'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const knex = require('../db/knex');


//GET ALL
router.get('/', function(req, res, next){

  knex('clutch')
  .join('snakes', 'clutch.snake_id', 'snakes.id')
  .where('snakes.user_id', req.user.id)
  .then(function(data){
    console.log(data);
    res.json('Get All Clutches');
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });

});

//GET BY ID
router.get('/:id', function(req, res, next){

  knex('clutch')
  .where('id', req.params.id)
  .select('*')
  .then(function(data){
    console.log(data);
    res.json('Success');
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });

});
//CREATE
router.post('/new', function(req, res, next){

  knex('clutch')
  .insert({
    snake_id: req.body.dame,
    date_layed: req.body.date_layed,
    number_layed: req.body.number_layed,
    bad_eggs: req.body.bad_eggs})
  .then(function(data){
    console.log(data);
    res.json('Added Clutch');
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });

});
//UPDATE
router.put('/:id', function(req, res, next){

  var clutch = {
    id: req.params.id,
    snake_id: req.body.snake_id,
    notes: req.body.notes,
    date_layed: req.body.date_layed,
    number_layed: req.body.number_layed,
    bad_eggs: req.body.bad_eggs,
    number_hatched: req.body.number_hatched
  };

  knex('clutch')
  .where('id', req.params.id)
  .update(clutch)
  .then(function(data){
    console.log(data);
    res.json('Updated Clutch');
  })
  .catch(function(err){
    console.log(err);
    res.status(500).message({
      err:err
    });
  });

});

//DELETE
router.delete('/:id', function(req, res, next){

  knex('clutch')
  .where('id', req.params.id)
  .del()
  .then(function(data){
    console.log(data);
    res.json('Deleted Clutch');
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });
});



module.exports = router;
