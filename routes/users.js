'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const knex = require('../db/knex');
const bcrypt = require('bcrypt');


//CHECK EMAIL FOR UPDATE
function checkEmail(email){
  return knex('users').select('*').where({email: email});
}


//ACCOUNT PAGE
router.get('/', function(req, res, next){
  //TODO get USER information

  knex('users')
  .select('id', 'email')
  .where('id', req.user.id)
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


router.put('/:id', function(req, res, next) {
  //TODO update USER information Mostly PASSWORD info
  console.log(req.body);


  var account = {
    id: req.params.id,
    email: req.body.email,
    password: req.body.password
  };

  console.log(account);

  // knex('users')
  // .select('*')
  // .where('id', req.user.id)
  // .update(account, '*')
  // .then(function(data){
  //   console.log(data);
  //   res.json(data);
  // })
  // .catch(function(err){
  //   console.log(err);
  //   res.status(500).json({
  //     err:err
  //   });
  // });

  bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(req.body.password, salt, function(err, hash){
      console.log(account);
      account = {
        id: req.params.id,
        email: req.body.email,
        password: hash
      }
      knex('users').where('id', req.user.id).update(account, '*')
      // .returning('id')
      .then(function(data){
        console.log(data);
        res.json(data);
          // var profile = {
          //   id: id[0],
          //   email: account.email
          // };
          // var token = jwt.sign(profile, process.env.SECRET);
          // res.status(200).json({token: token});
      })
      .catch(function(err){
        res.status(500).json({err: err});
      });
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
    res.json('Account Deleted', data);
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
