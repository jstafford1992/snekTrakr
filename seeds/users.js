'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, email: 'Jimmy', password: "1234"}),
        knex('users').insert({id: 2, email: 'BobTheBuilder', password: "1234"}),
        knex('users').insert({id: 3, email: 'Jared', password: "1234"})
      ]);
    });
};
