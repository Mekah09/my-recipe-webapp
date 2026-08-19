import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
// import { FiHeart } from 'react-icons/fi';
// import SearchMenu from "../components/SearchMenu";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(response => response.json())
      .then(data => setRecipes(data.recipes))
  }, []);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(savedWishlist);

  }, [])

  const handleWishlist = (recipe) => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const alreadyExists = savedWishlist.some(
      (item) => item.id === recipe.id
    )
    if (alreadyExists) {
      const updateWishlist = savedWishlist.filter(
        (item) => item.id !== recipe.id
      )
      localStorage.setItem(
        "wishlist",
        JSON.stringify(updateWishlist)
      )
      setWishlist(updateWishlist)
    } else {
      const updatedWishlist = [...savedWishlist, recipe]

      localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedWishlist)
      );
      setWishlist(updatedWishlist)
    }
  }

  return (
    <>
      <Navbar />
      <div>
        <div>
          <div className="shadow-md p-5 text-center m-5 ">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl mt-5">Recipe Directory</h1>
            <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Search our collection of different Cuisine of food based on event, cost, time of preperation we get you covered always</p>
          </div>
          <div>
            {/* <SearchMenu/> */}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-4">
          {recipes.map((recipe) => {
            const isWishlisted = wishlist.some(
              (item) => item.id === recipe.id
            )

            return (
              <Link to={`/RecipesDetails/${recipe.id}`}>
                <div key={recipe.id} className="overflow-hidden rounded-2xl bg-white shadow-md text-slate-800 p-3.5 flex flex-col justify-between cursor-pointer transition hover:scale-105 hover:shadow-lg">

                  <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-3 ">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/10">
                      {recipe.cuisine}
                    </span>
                    <button onClick={() => handleWishlist(recipe)} className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-colors bg-black/60 text-gray-300 hover:text-white border border-white/15">
                      <FiHeart className={isWishlisted ? "text-red-500" : "text-gray-500"} />
                    </button>
                    <div className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 border border-white/10">
                      <svg className="w-2.5 h-2.5 text-[#f4a261]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      {recipe.rating}
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 bg-black/75 backdrop-blur-md text-gray-300 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-white/10">
                      {recipe.difficulty}
                    </div>
                  </div>


                  <div className="mt-4 flex flex-col gap-3">

                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-900">{recipe.name}</h3>
                      {/* <span className="rounded-md bg-purple-600 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
                    NEW
                  </span> */}
                    </div>


                    <p className="text-sm text-slate-600 leading-relaxed">{recipe.ingredients[0]}, {recipe.ingredients[1]}, {recipe.ingredients[2]}, {recipe.ingredients[3]}...</p>

                    {/* Action Tags */}
                    <div className="mt-2 flex items-center justify-end gap-2">
                      <button className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-100">
                        {recipe.tags[0]}
                      </button>
                      <button className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-100">
                        {recipe.tags[1]}
                      </button>
                    </div>
                  </div>
                </div>

              </Link>
            )
          })}

        </div>
      </div>
    </>
  )
}

export default Recipes