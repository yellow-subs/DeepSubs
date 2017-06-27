// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'deep_subs',
    user: 'deeper',
    password: 'valky1223',
    host: 'localhost',
    port: 5432,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'postgres_db/migrations',
  },
};
