const CONFIG = require('../config/development');

const knex = require('knex')(CONFIG.knex_config);

module.exports = knex;
