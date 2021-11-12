exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cities")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("cities").insert([{ name: "Pereiro" }, { name: "Tokyo" }]);
    });
};
