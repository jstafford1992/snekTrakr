'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('snakes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('snakes').insert({id: 1, colName: 'rowValue1'}),
        knex('snakes').insert({id: 2, colName: 'rowValue2'}),
        knex('snakes').insert({id: 3, colName: 'rowValue3'})
      ]);
    });
};
