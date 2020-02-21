const db = require("./dbConfig.js")

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}


function getRecipes(){
    return db("recipes")
}

function getShoppingList(id_recipe){
    return db("recipe_step")
    .join("ingredients","recipe_step.ingredient_id", "ingredients.id" )
    .select("recipe_step.quantity", "ingredients.ingredient_Name")
    .where({recipe_id: id_recipe})
}

function getInstructions(id){
    return db("recipes")
    .select("recipes.instructions")
    .where({ id })
    .first()
}