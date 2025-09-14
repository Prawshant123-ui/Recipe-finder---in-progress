import React from "react"
import Repcard from "./Repcard"

const Repcontainer = ({ search, recipes, loading, error }) => {
  // Filter recipes based on search query
  const filteredData = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) {
    return <p className="text-center">Loading recipes...</p>
  }

  if (error) {
    return (
      <p className="text-center text-red-500">
        Error fetching recipes: {error}
      </p>
    )
  }

  if (filteredData.length === 0) {
    return <p className="text-center">No recipes found.</p>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Render recipe cards */}
      {filteredData.map((recipe) => (
        <Repcard key={recipe.id} recipie={recipe} />
      ))}
    </div>
  )
}

export default Repcontainer
