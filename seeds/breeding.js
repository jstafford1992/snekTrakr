'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('breeding').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('breeding').insert({id: 1, snake_id: 1, sire: 4, date_paired: '09-09-2016'}),
        knex('breeding').insert({id: 2, snake_id: 2, sire: 4, date_paired: '08-09-2016'}),
        knex('breeding').insert({id: 3, snake_id: 3, sire: 4, date_paired: '07-09-2016'})
      ]);
    });
};
