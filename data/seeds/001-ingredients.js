
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_Name: 'eggs'},
        {id: 2, ingredient_Name: 'flower'},
        {id: 3, ingredient_Name: 'butter'}
      ]);
    });
};
