import { useState, useEffect, useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchMenu = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Fetch all recipes on component mount
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        setRecipes(data.recipes || []);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  // Handle search query change
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredRecipes([]);
      setIsOpen(false);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.cuisine.toLowerCase().includes(query) ||
        recipe.tags?.some((tag) => tag.toLowerCase().includes(query))
    );

    setFilteredRecipes(results.slice(0, 8)); // Limit to 8 results
    setIsOpen(true);
  }, [searchQuery, recipes]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRecipeClick = (recipeId) => {
    navigate(`/RecipesDetails/${recipeId}`);
    setSearchQuery('');
    setIsOpen(false);
  };

  const handleClear = () => {
    setSearchQuery('');
    setFilteredRecipes([]);
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <FaSearch />
        </div>
        <input
          type="text"
          placeholder="Search recipes, cuisine, tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => searchQuery && setIsOpen(true)}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <FaTimes />
          </button>
        )}
      </div>2

      {/* Dropdown Results */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center text-gray-500">Loading...</div>
          ) : filteredRecipes.length > 0 ? (
            <div>
              {filteredRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  onClick={() => handleRecipeClick(recipe.id)}
                  className="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0 transition"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 truncate">
                        {recipe.name}
                      </h4>
                      <p className="text-sm text-gray-600">{recipe.cuisine}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : searchQuery ? (
            <div className="p-4 text-center text-gray-500">
              No recipes found for "{searchQuery}"
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchMenu;
