exports.up = function (knex) {
  return knex.schema.createTable("cities", function (table) {
    table.increments("id", { primaryKey: true });
    table.string("name", 80);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cities");
};
