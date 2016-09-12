'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('snakes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('snakes').insert({id: 1, user_id: '1', name: 'Mojave-01', notes: '', sex: 'female', year_hatched: '01-01-2008', group: 'breeder', url: '', image_url: 'http://www.worldofballpythons.com/files/morphs/mojave/005.jpg'}),
        knex('snakes').insert({id: 2, user_id: '1', name: 'Mojave-02', notes: '', sex: 'female', year_hatched: '01-01-2009', group: 'breeder', url: '', image_url: 'http://www.regiusco.com/images/pythons/Mojave.jpg'}),
        knex('snakes').insert({id: 3, user_id: '1', name: 'Mojave-03', notes: '', sex: 'female', year_hatched: '01-01-2010', group: 'breeder', url: '', image_url: 'http://www.cookreptiles.com/available/bp_mojave_male.jpg'}),
        knex('snakes').insert({id: 4, user_id: '1', name: 'Banana-01', notes: '', sex: 'male', year_hatched: '01-01-2010', group: 'breeder', url: '', image_url: 'http://www.worldofballpythons.com/files/morphs/banana-ball/006.jpg'})
      ]);
    });
};
