'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('clutch', function(table){
    table.increments();
    //Mother's snake_id. Can do joinTable to find  pairings/breedings with males
    table.integer('snake_id');
    table.string('notes');
    table.date('date_layed');
    table.integer('number_layed');
    table.integer('bad_eggs');
    table.integer('number_hatched');
    table.string('image_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('clutch');
};
