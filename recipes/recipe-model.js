const db = require("./dbConfig.js")

module.exports = {
    getRecipes,
}


function getRecipes(){
    return db("recipes")
}