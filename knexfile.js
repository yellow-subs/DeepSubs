// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    database: 'deep_subs',
    user: 'postgres',
    password: 'valky1223',
    host: 'localhost',
    port: 5432,
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres://qwkbtfjekorpaf:e64cb170751d11de363092ba23913dc127bca2f3a4e5a45677689d1992020731@ec2-23-21-220-48.compute-1.amazonaws.com:5432/ddbjt8j5mcbftq',
      user: 'postgres',
      password: 'valky1223',
    },
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: 'postgres_db/migrations',
  },
};
