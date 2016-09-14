'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const knex = require('../db/knex');

//will be routed here successful login

router.get('/', function(req, res, next){
  //TODO will get all snakes and list them out for the user to view.

  // res.send('HELLO JIMMY!');

  knex('snakes').select('*').where('user_id', 1)
  .then(function(data){
    res.send(data);
  })
  .catch(function(err){
    throw new Error();
  });

});



router.get('/:id', function(req, res, next){
  //TODO will list individual snake for detailed report
  var gender;
  knex('snakes').select('sex')
  .where('id', req.params.id)
  .then(function(data){
       gender = data[0].sex;
       if (gender === "female") {
         knex('snakes')
         .where('snakes.id', req.params.id)
         .join('users', 'snakes.user_id', '=', 'users.id' )
         .join('shed', 'snakes.id', '=', 'shed.snake_id')
         .join('weight', 'snakes.id', '=', 'weight.snake_id')
         .join('feeding', 'snakes.id', '=', 'feeding.snake_id')
         .join('breeding', 'snakes.id', '=', 'breeding.snake_id')
         .join('clutch', 'snakes.id', '=', 'clutch.snake_id')
         .select('snakes.id', 'snakes.name', 'snakes.notes', 'snakes.sex', 'snakes.year_hatched', 'snakes.group', 'snakes.url', 'snakes.image_url', 'shed.date_shed', 'shed.prelay',  'weight.weight', 'weight.date_weighed', 'feeding.rat_size', 'feeding.successful', 'feeding.attempted', 'breeding.sire', 'breeding.date_paired', 'clutch.notes', 'clutch.date_layed', 'clutch.number_layed', 'clutch.bad_eggs')
         .then(function(data){
           res.json(data[0]);
         })
         .catch(function(err){
           throw new Error(err);
         });
       } else {
         knex('snakes')
         .where('snakes.id', req.params.id)
        //  .join('users', 'snakes.user_id', '=', 'users.id' )
         .join('shed', 'snakes.id', '=', 'shed.snake_id')
         .join('weight', 'snakes.id', '=', 'weight.snake_id')
         .join('feeding', 'snakes.id', '=', 'feeding.snake_id')
         .join('breeding', 'snakes.id', '=', 'breeding.sire')
         .select('*')
         .then(function(data){
           res.json(data);
         })
         .catch(function(err){
           throw new Error(err);
         });
       }
  }).catch(function(err){
    console.error(err);
  });

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
