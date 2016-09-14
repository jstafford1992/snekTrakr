'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shed').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('shed').insert({id: 1, snake_id: 1, date_shed: '09-09-2016', prelay: false}),
        knex('shed').insert({id: 2, snake_id: 2, date_shed: '09-09-2016', prelay: true}),
        knex('shed').insert({id: 3, snake_id: 1, date_shed: '07-09-2016', prelay: false}),
        knex('shed').insert({id: 4, snake_id: 3, date_shed: '07-09-2016', prelay: false}),
        knex('shed').insert({id: 5, snake_id: 4, date_shed: '09-09-2016', prelay: false})
      ]);
    });
};
