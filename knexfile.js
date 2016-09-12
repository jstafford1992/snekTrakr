'use strict';

module.exports = {

  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || 'postgres://localhost/snek_trakr'
  },

  staging: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || 'postgres://localhost/snek_trakr',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
