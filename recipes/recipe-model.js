const db = require("./dbConfig.js")

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}


function getRecipes(){
    return db("recipes")
}