
exports.up = function(knex) {
  return knex.schema.createTable("recipes", tbl => {
      tbl.increments();
    tbl.string('recipe_name' , 128)
      .unique()
      .notNullable();
    tbl.string("ingredients").notNullable();
  })
  .createTable("ingredients", tbl => {
      tbl.increments()
      tbl.text("ingredient")
  })
};

exports.down = function(knex) {
  
};
