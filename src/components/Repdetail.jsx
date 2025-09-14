import React from "react"
import { Link, useNavigate } from "react-router-dom"

const Repdetail = ({ recipes }) => {
  const navigate = useNavigate()
  
  // Since this is a static route, we'll display the first recipe
  const selectedRecipe = recipes.length > 0 ? recipes[0] : null

  // Handle cases where recipes are still loading or the specific recipe isn't found
  if (recipes.length === 0) {
    return (
      <div className="text-center mt-10">
        <p>Loading recipe details...</p>
        <p className="mt-2 text-sm text-gray-400">
          If this takes too long, please go back to the home page.
        </p>
        <Link to="/" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg">
          Go Home
        </Link>
      </div>
    )
  }
  if (!selectedRecipe) {
    // This case handles if recipes array is present but empty or recipe not found.
    return <div className="text-center mt-10">No recipe data is available to display.</div>
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-blue-900 text-white rounded-xl shadow-lg mt-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
      >
        &larr; Go Back
      </button>
      <h1 className="text-3xl font-bold mb-4">{selectedRecipe.name}</h1>

      <p className="mb-2">
        <span className="font-semibold">Cuisine:</span> {selectedRecipe.cuisine}
      </p>
      <p className="mb-4">
        <span className="font-semibold">Cooking Time:</span> {selectedRecipe.time}
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-blue-300">Ingredients:</h2>
      <ul className="list-disc list-inside mb-4">
        {selectedRecipe.ingredients && Array.isArray(selectedRecipe.ingredients) ? 
          selectedRecipe.ingredients.map((ingredient, index) => (
            <li key={index} className="mb-1">{ingredient}</li>
          )) : 
          <li>No ingredients available</li>
        }
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-blue-300">Instructions:</h2>
      <ol className="list-decimal list-inside">
        {selectedRecipe.instructions && Array.isArray(selectedRecipe.instructions) ? 
          selectedRecipe.instructions.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          )) : 
          <li>No instructions available</li>
        }
      </ol>
    </div>
  )
}

export default Repdetail
