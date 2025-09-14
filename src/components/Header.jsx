import React from "react";

const Header = ({ theme, onThemeToggle }) => {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-md dark:bg-gray-800 transition-colors duration-300">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Recipe Finder
        </h1>
      </div>
      <div>
        <button
          onClick={onThemeToggle}
          className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;

