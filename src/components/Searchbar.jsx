import React from 'react'

const Searchbar = ({ search, setSearch }) => {
  return (
    <div className="w-full max-w-md mx-auto px-4 py-2">
      <input 
        type="text" 
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600
                   placeholder-gray-500 dark:placeholder-gray-400
                   shadow-sm transition"
      />
    </div>
  )
}

export default Searchbar
