
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'burger', instructions: "Make BURGER"},
        {id: 2, recipe_name: 'cheese burger', instructions: "Make BURGER with CHEESE"},
        {id: 3, recipe_name: 'tacos', instructions: "Make BURGER and then put in tortilla"}
      ]);
    });
};
