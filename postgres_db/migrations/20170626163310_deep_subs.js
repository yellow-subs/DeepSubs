exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id').unsigned().primary();
    table.string('username', 100);
    table.string('password', 100);
    table.string('first_name', 100);
    table.string('last_name', 100);
    table.string('img_url', 300);
    table.string('auth_provider', 100)
    table.string('email', 100).nullable().unique();
    table.timestamps(true, true);
  }),
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('users'),
]);
