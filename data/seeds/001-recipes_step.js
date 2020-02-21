
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_step').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_step').insert([
        { id: 1, quantity: 2, ingredient_id: 1, recipe_id: 1 },
        { id: 2, quantity: 4, ingredient_id: 2 , recipe_id: 2},
        { id: 3, quantity: 6, ingredient_id: 3 , recipe_id: 3}
      ]);
    });
};
