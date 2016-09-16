'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const knex = require('../db/knex');


//GET ALL
router.get('/', function(req, res, next){



});

//GET BY ID
router.get('/:id', function(req, res, next){



});
//CREATE
router.post('/new', function(req, res, next){



});
//UPDATE
router.put('/:id', function(req, res, next){



});

//DELETE
router.delete('/:id', function(req, res, next){



});



module.exports = router;
