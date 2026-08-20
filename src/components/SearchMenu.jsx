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
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-taupe">
          <FaSearch />
        </div>
        <input
          type="text"
          placeholder="Search recipes, cuisine, tags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => searchQuery && setIsOpen(true)}
          className="w-full rounded-lg border border-oat bg-milk py-2 pl-10 pr-10 text-sm text-charcoal placeholder:text-taupe focus:border-mocha focus:outline-none focus:ring-2 focus:ring-oat"
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-taupe transition hover:text-charcoal"
          >
            <FaTimes />
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-96 overflow-y-auto rounded-lg border border-oat bg-milk shadow-xl">
          {isLoading ? (
            <div className="p-4 text-center text-sm text-mocha">Loading...</div>
          ) : filteredRecipes.length > 0 ? (
            <div>
              {filteredRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  onClick={() => handleRecipeClick(recipe.id)}
                  className="cursor-pointer border-b border-oat p-3 transition last:border-b-0 hover:bg-oat/50"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="truncate font-semibold text-charcoal">
                        {recipe.name}
                      </h4>
                      <p className="text-sm text-mocha">{recipe.cuisine}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : searchQuery ? (
            <div className="p-4 text-center text-sm text-mocha">
              No recipes found for "{searchQuery}"
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchMenu;
