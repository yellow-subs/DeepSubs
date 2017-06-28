const CONFIG = require('../config/development');

if (process.env.NODE_ENV = 'production') {
  CONFIG.knex_config = {
    client: 'postgresql',
    connection: {
      host: 'host',
      user: 'deeper',
      password: 'valky1223',
      database: 'deep_subs',
      charset: 'utf8',
    },
  };
}
const knex = require('knex')(CONFIG.knex_config);

module.exports = knex;
