import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Searchbar from "./components/Searchbar"
import Repcontainer from "./components/Repcontainer"
import Repdetail from "./components/Repdetail"

const API_URL =
  "https://raw.githubusercontent.com/Prawshant123-ui/Recipie.JSON-API/refs/heads/main/recipes.json"

const HomePage = ({ search, setSearch, recipes, loading, error }) => (
  <>
    <div className="container mx-auto px-4 py-6">
      <Searchbar search={search} setSearch={setSearch} />
    </div>
    <div className="container mx-auto px-4 pb-10">
      <Repcontainer search={search} recipes={recipes} loading={loading} error={error} />
    </div>
  </>
)

const App = () => {
  const [search, setSearch] = useState("")
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  // Fetch all recipes once in the top-level App component
  useEffect(() => {
    setLoading(true)
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch recipes")
        }
        return response.json()
      })
      .then((data) => {
        setRecipes(data)
        setLoading(false)
      })
      .catch((err) => setError(err.message))
  }, [])

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Header */}
        <Header theme={theme} onThemeToggle={handleThemeToggle} />

        {/* Routes */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <HomePage
                search={search}
                setSearch={setSearch}
                recipes={recipes}
                loading={loading}
                error={error}
              />
            }
          />

          {/* Recipe Detail Page */}
          <Route path="/recipe" element={<Repdetail recipes={recipes} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
