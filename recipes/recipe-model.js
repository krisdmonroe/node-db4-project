const db = require("./dbConfig.js")

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}


function getRecipes(){
    return db("recipes")
}

function getShoppingList(id){
    return db("ingredients")
    .join("recipe_step", "recipe_step.ingredient_id" , "=", "ingredients.id")
    .select("recipe_step.quantity","ingredients.ingredient_Name")
    .where({ id })
    .first()
}

function getInstructions(id){
    return db("recipes")
    .select("recipes.instructions")
    .where({ id })
    .first()
}