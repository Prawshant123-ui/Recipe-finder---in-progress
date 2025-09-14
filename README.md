# Recipe Finder Application

A React application for finding and viewing recipes with static routing implementation.

## Features

- Recipe card display with images, cuisine type, and cooking time
- Static routing to recipe detail page
- Search functionality
- Light/dark theme toggle
- Responsive design

## Technologies Used

- React
- React Router
- Tailwind CSS
- Vite

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
# Clone the repository
git clone https://github.com/Prawshant123-ui/Recipe-finder---in-progress.git

# Navigate to the project directory
cd recipie-finder

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Project Structure

- `src/components/` - React components
  - `Header.jsx` - Application header with theme toggle
  - `Repcard.jsx` - Recipe card component
  - `Repcontainer.jsx` - Container for recipe cards
  - `Repdetail.jsx` - Recipe detail page
  - `Searchbar.jsx` - Search functionality
- `src/App.jsx` - Main application component with routing
