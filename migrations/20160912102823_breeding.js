'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('breeding', function(table){
    table.increments();
    //Female snake_id (DAME)
    table.integer('snake_id');
    //Male snake_id (SIRE)
    table.date('date_paired');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('breeding');
};
