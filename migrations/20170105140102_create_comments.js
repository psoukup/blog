
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(t) {
    t.increments();
    t.text('comment');
    t.bigInteger('post_id').unsigned().index().references('id').inTable('posts').onDelete('cascade');
    t.bigInteger('user_id').unsigned().index().references('id').inTable('users').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
