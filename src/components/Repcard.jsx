import React from "react"
import { Link } from "react-router-dom"

const Repcard = ({ recipie }) => {
  // Rename prop internally for consistency
  const recipe = recipie
  if (!recipe) return null

  return (
    <div className="max-w-sm bg-white dark:bg-blue-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={recipe.image || "https://placehold.co/400x300"}
          alt={recipe.name || "N/A"}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-white mb-2">
          {recipe.name ?? "N/A"}
        </h2>
        <p className="text-blue-200 mb-1">
          Cuisine: <span className="font-medium">{recipe.cuisine ?? "N/A"}</span>
        </p>
        <p className="text-blue-200 mb-1">
          Cooking Time: <span className="font-medium">{recipe.time ?? "N/A"}</span>
        </p>

        {/* Link to the static recipe detail page */}
        <Link to="/recipe">
          <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Repcard
