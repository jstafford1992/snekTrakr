'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('weight', function(table){
    table.increments();
    table.integer('snake_id');
    table.integer('weight');
    table.date('date_weighed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('weight');
};
