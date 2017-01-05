
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(t) {
    t.increments();
    t.text('title');
    t.text('body');
    t.bigInteger('user_id').unsigned().index().references('id').inTable('users').onDelete('cascade');
    t.timestamp('created_on').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
