import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import Star Icons

const RecipeCard = ({ recipe }) => {
  // Function to generate star ratings based on value
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating); // Number of full stars
    const hasHalfStar = rating % 1 !== 0; // Check if there's a half star

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} color="#FFD700" />); // Full Star
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" color="#FFD700" />); // Half Star
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={stars.length} color="#FFD700" />); // Empty Stars
    }

    return stars;
  };

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>

      {/* Display Ratings as Stars */}
      <div className="recipe-rating">{renderStars(recipe.rating)}</div>

      {/* Display Time */}
      <p>⏳ {recipe.time}</p>

      {/* ✅ Add the "View Recipe" Button */}
      <Link to={`/recipe/${recipe.id}`}>
        <button className="view-recipe-btn">View Recipe</button>
      </Link>
    </div>
  );
};

export default RecipeCard;
