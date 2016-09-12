'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clutch').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('clutch').insert({id: 1, snake_id: 1, notes: '', date_layed: '09-09-2016', number_layed: 7, bad_eggs: 1}),
        knex('clutch').insert({id: 2, snake_id: 2, notes: '', date_layed: '09-09-2016', number_layed: 8, bad_eggs: 2}),
        knex('clutch').insert({id: 3, snake_id: 3, notes: '', date_layed: '09-09-2016', number_layed: 6, bad_eggs: 0})
      ]);
    });
};
