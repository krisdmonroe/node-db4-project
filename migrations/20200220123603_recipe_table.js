
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
      tbl.string("ingredient_name", 128).notNullable()
  })
  .createTable("recipe_step", tbl => {
      tbl.increments()
      tbl.float('quantity').notNullable()
      tbl.integer("recipe_id")
      .unsigned()
      .notNullable()
      .reference("id")
      .intable("recipes")
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      tbl.integer("ingredient_id")
      .unsigned()
      .notNullable()
      .reference("id")
      .intable("ingredients")
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipe_step")
};
