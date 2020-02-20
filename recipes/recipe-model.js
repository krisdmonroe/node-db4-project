const db = require("./dbConfig.js")

module.exports = {
    getRecipes,
    getShoppingList,
}


function getRecipes(){
    return db("recipes")
}
function getShoppingList(recipe_id){

}