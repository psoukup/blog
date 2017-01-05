
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t) {
    t.increments();
    t.text('username');
    t.text('email');
    t.text('password');
    t.text('firstname');
    t.text('lastname');
    t.boolean('Admin');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
