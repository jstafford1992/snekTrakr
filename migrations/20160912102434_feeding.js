'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('feeding', function(table){
    table.increments();
    table.integer('snake_id');
    table.string('rat_size');
    table.date('successful');
    table.date('attempted');
    table.integer('amount')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('feeding');
};
