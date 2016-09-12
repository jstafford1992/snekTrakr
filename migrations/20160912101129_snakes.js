'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('snakes', function(table){
    table.increments();
    table.integer('user_id');
    table.string('name');
    table.string('notes');
    table.string('sex');
    table.date('year_hatched');
    table.string('group');
    table.string('url');
    table.string('image_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('snakes');
};
