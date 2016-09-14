'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('feeding').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('feeding').insert({id: 1, snake_id: 1, rat_size: 'small', successful: '09-09-2016', attempted: '09-09-2016'}),
        knex('feeding').insert({id: 2, snake_id: 1, rat_size: 'small', successful: '08-09-2016', attempted: '08-09-2016'}),
        knex('feeding').insert({id: 3, snake_id: 1, rat_size: 'small', attempted: '07-09-2016'}),
        knex('feeding').insert({id: 4, snake_id: 2, rat_size: 'small', attempted: '07-09-2016'}),
        knex('feeding').insert({id: 5, snake_id: 3, rat_size: 'small', attempted: '07-09-2016'}),
        knex('feeding').insert({id: 6, snake_id: 4, rat_size: 'small', successful: '08-09-2016', attempted: '08-09-2016'})
      ]);
    });
};
