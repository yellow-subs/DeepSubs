// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'deep_subs',
      user: 'postgres',
      password: 'valky1223',
      host: 'localhost',
      port: 5432,
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      database: process.env.DATABASE_URL,
      user: 'postgres',
      password: 'valky1223',
    },
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'postgres_db/migrations',
  },
};
