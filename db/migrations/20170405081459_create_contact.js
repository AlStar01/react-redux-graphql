
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('contact', (table) => {
        table.increments().primary();
        table.string('name').notNullable().unique();
        table.string('email').notNullable();
        table.string('phone').notNullable();
        table.string('street').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.integer('zip').notNullable();
        table.string('website').notNullable();
        table.string('company').notNullable();
        table.string('title').notNullable();
        table.string('avatar').notNullable();
        table.date('birthday').notNullable();

        table.timestamp('created_on').defaultTo(knex.fn.now());
        table.timestamp('modified_on').defaultTo(knex.fn.now());
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTableIfExists('contact')
  ]);
};
