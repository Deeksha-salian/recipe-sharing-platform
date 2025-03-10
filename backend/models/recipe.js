const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String }, // optional, for storing image URLs
  description: { type: String },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
