'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

//get weight by ID
router.get('/:id', function(req, res, next){
  knex('weight')
  .select('*')
  .where('snake_id', req.params.id)
  .then(function(data){
    console.log(data);
    res.json("Get Weight Data");
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });

});

//add new weight data
router.post('/:id', function(req, res, next){
  knex('weight')
  .insert({
    snake_id: req.params.id,
    weight: req.body.weight,
    date_weighed: req.body.date_weighed
  })
  .then(function(data){
    console.log(data);
    res.json("Added new weight");
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });

});

//delete Weight data
router.delete('/:id', function(req, res, next){
  knex('weight')
  .where('snake_id', req.params.id)
  .del()
  .then(function(data){
    console.log(data);
    res.json("Deleted Weight Data");
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });

});


module.exports = router;
