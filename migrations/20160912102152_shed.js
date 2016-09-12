'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('shed', function(table) {
    table.increments();
    table.integer('snake_id');
    table.date('date_shed');
    table.boolean('prelay');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shed');
};
