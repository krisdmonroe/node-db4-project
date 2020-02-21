const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();


router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });
  
  router.get('/:id/list', (req, res) => {
    const id = req.params.id;
  
    Recipes.getShoppingList(id)
    .then(recipe => {
        if (recipe) {
          res.json(recipe);
        } else {
          res.status(404).json({ message: "Could not recipe with given id." });
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to get recipe shopping list" });
      });

  });
  router.get('/:id/in', (req, res) => {
    const id = req.params.id;
    Recipes.getInstructions(id)
    .then(recipe => {
        if (recipe) {
          res.json(recipe);
        } else {
          res.status(404).json({ message: "Could not recipe with given id." });
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to get recipe instructions" });
      });
  });

module.exports = router;