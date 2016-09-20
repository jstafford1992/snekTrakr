'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const knex = require('../db/knex');

router.get('/', function(req, res, next){
  //TODO will get all snakes and list them out for the user to view.
  // console.log(req.user);
  knex('snakes')
  .where('user_id', req.user.id)
  .select('*')
  .then(function(data){
    res.json(data);
  })
  .catch(function(err){
    throw new Error();
  });

});

router.get('/:id', function(req, res, next){
  //TODO will list individual snake for detailed report
  // var gender;
  // knex('snakes')
  // .select('sex')
  // .where('id', req.params.id)
  // .then(function(data){
  //      gender = data[0].sex;
  //      if (gender === "female") {
  //        knex('snakes')
  //        .where('snakes.id', req.params.id)
  //        .join('users', 'snakes.user_id', '=', 'users.id' )
  //        .join('shed', 'snakes.id', '=', 'shed.snake_id')
  //        .join('weight', 'snakes.id', '=', 'weight.snake_id')
  //        .join('feeding', 'snakes.id', '=', 'feeding.snake_id')
  //        .join('breeding', 'snakes.id', '=', 'breeding.snake_id')
  //        .join('clutch', 'snakes.id', '=', 'clutch.snake_id')
  //        .select('snakes.id', 'snakes.name', 'snakes.notes', 'snakes.sex', 'snakes.year_hatched', 'snakes.group', 'snakes.url', 'snakes.image_url', 'shed.date_shed', 'shed.prelay',  'weight.weight', 'weight.date_weighed', 'feeding.rat_size', 'feeding.successful', 'feeding.attempted', 'breeding.sire', 'breeding.date_paired', 'clutch.notes', 'clutch.date_layed', 'clutch.number_layed', 'clutch.bad_eggs')
  //        .then(function(data){
  //          res.json(data);
  //        })
  //        .catch(function(err){
  //          throw new Error(err);
  //        });
  //      } else {
  //        knex('snakes')
  //        .where('snakes.id', req.params.id)
  //       //  .join('users', 'snakes.user_id', '=', 'users.id' )
  //        .join('shed', 'snakes.id', '=', 'shed.snake_id')
  //        .join('weight', 'snakes.id', '=', 'weight.snake_id')
  //        .join('feeding', 'snakes.id', '=', 'feeding.snake_id')
  //        .join('breeding', 'snakes.id', '=', 'breeding.sire')
  //        .select('*')
  //        .then(function(data){
  //          res.json(data);
  //        })
  //        .catch(function(err){
  //          throw new Error(err);
  //        });
  //      }
  // }).catch(function(err){
  //   console.error(err);
  // });
  var gender;
  var snake = {};
  var shed = {};
  var weight = {};
  var feed = {};
  var pair = {};

  var container = {};

  knex('snakes').select('*').where('id', req.params.id).then(function(data){
    console.log("Snakes: ", data);
    gender = data[0].sex;
    container.snake = data[0];
    if (gender == "male") {
      console.log(gender);
      var breedingMale = knex('breeding')
      .select('*')
      .where('sire', req.params.id)
      .join('snakes', 'breeding.snake_id', 'snakes.id')
      .then(function(data){
        // console.log("Breeding Male");
        container.pair = data;
      });
      Promise.all([shedding, weighing, feeding, breedingMale]);
      return setTimeout(function(){
          console.log("Inside Timeout: ", container);
        return res.json(container);
      }, 50);
    } else {
      var breedingFemale = knex('breeding')
      .select('*')
      .where('snake_id', req.params.id)
      .join('snakes', 'snakes.id', 'breeding.sire')
      .then(function(data){
        // console.log("Pair: ", data);
        // res.json(data);
        // console.log("Breeding Female");
        container.pair = data;
      });
      Promise.all([shedding, weighing, feeding, breedingFemale]);
      return setTimeout(function(){
          console.log("Inside Timeout: ", container);
        return res.json(container);
      }, 50);
    }

    // res.json(container)

  }).catch(function(err){
    console.log(err);
    res.status(500).json({
      err:err
    });
  });

  var shedding = knex('shed')
  .select('*')
  .where('snake_id', req.params.id)
  .then(function(data){
    // console.log("Shed: ", data);
    container.shed = data;
    // res.json(data);
  });

  var weighing = knex('weight')
  .select('*')
  .where('snake_id', req.params.id)
  .then(function(data){
    // console.log("Weight: ", data);
    // res.json(data);
    container.weight = data;
  });

  var feeding = knex('feeding')
  .select('*')
  .where('snake_id', req.params.id)
  .then(function(data){
    // console.log("Feeding: ", data);
    // res.json(data);
    container.feed = data;
  });


  // var breedingFemale = knex('breeding')
  // .select('*')
  // .join('snakes', 'snakes.id', 'breeding.sire')
  // .where('snake_id', req.params.id)
  // .then(function(data){
  //   // console.log("Pair: ", data);
  //   // res.json(data);
  //   // console.log("Breeding Female");
  //   container.pair = data;
  // });




});

router.post('/new', function(req, res, next){
  //TODO create new snakes
  //SHOULD HAVE OPTION TO INSERT OTHER OPTIONAL RELATED INFO FOR OTHER TABLES

  var snake = {
    user_id: req.body.user_id,
    name: req.body.name,
    notes: req.body.notes,
    sex: req.body.sex,
    year_hatched: req.body.year_hatched,
    group: req.body.group,
    url: req.body.url,
    image_url: req.body.image_url
  };

  knex('snakes')
  .insert(snake)
  .then(function(data){
    console.log(data);
    res.json("success");
  })
  .catch(function(err){
    console.log(err);
     res.json("failed insert");
  });


});

router.put('/:id', function(req, res, next){
  //TODO update snake details

  var snake = {
    id: req.params.id,
    user_id: req.body.user_id,
    name: req.body.name,
    notes: req.body.notes,
    sex: req.body.sex,
    year_hatched: req.body.year_hatched,
    group: req.body.group,
    url: req.body.url,
    image_url: req.body.image_url
  };

  knex('snakes')
  .where('id', req.params.id)
  .update(snake, '*')
  .then(function(data){
    console.log(data);
    res.json(data);
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err: err
    });
  });

});

router.delete('/:id', function(req, res, next){
  //TODO delete snake

  knex('snakes')
  .where('id', req.params.id)
  .del()
  .then(function(data){
    console.log(data);
    res.json("Deleted");
  })
  .catch(function(err){
    console.log(err);
    res.status(500).json({
      err: err
    });
  });

});



module.exports = router;
