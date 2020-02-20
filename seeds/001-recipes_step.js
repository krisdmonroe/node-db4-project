
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, quantity: 2, recipe_id: 1, ingredient_id:1 },
        { id: 1, quantity: 4, recipe_id: 2, ingredient_id:2 },
        { id: 1, quantity: 6, recipe_id: 3, ingredient_id:3 }
      ]);
    });
};
