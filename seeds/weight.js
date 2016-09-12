'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('weight').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('weight').insert({id: 1, snake_id: 1, weight: 2300, date_weighed: '09-09-2017'}),
        knex('weight').insert({id: 2, snake_id: 1, weight: 2200, date_weighed: '07-09-2017'}),
        knex('weight').insert({id: 3, snake_id: 2, weight: 2300, date_weighed: '09-09-2017'})
      ]);
    });
};
