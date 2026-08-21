import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
// import { FiHeart } from 'react-icons/fi';
import SearchMenu from "../components/SearchMenu";

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
    alert(alreadyExists ? "Recipe removed from your wishlist" : "Recipe added to your wishlist");
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
    <div className="min-h-screen bg-milk text-charcoal">
      <Navbar />
      <div>
        <div>
          <div className="mx-auto max-w-7xl border-b border-oat px-5 pb-10 pt-16 sm:px-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-taupe">The Haykay collection</p>
            <h1 className="max-w-3xl break-words text-4xl font-semibold tracking-tight text-charcoal sm:text-6xl">Recipes for the way you actually cook.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-mocha">Browse a considered collection of cuisines, comfort food, and everyday favorites. Clear ingredients, useful timing, no ceremony.</p>
          </div>
          <div>
            <SearchMenu/>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 xl:grid-cols-4">
          {recipes.map((recipe) => {
            const isWishlisted = wishlist.some(
              (item) => item.id === recipe.id
            )

            return (
              <div key={recipe.id} className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-oat bg-milk p-3.5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

                <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-3 ">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute left-2.5 top-2.5 rounded-md bg-charcoal/85 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-oat backdrop-blur-md">
                    {recipe.cuisine}
                  </span>
                  <button aria-label={isWishlisted ? "Remove from saved recipes" : "Save recipe"} onClick={() => handleWishlist(recipe)} className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full border border-milk/30 bg-charcoal/80 text-milk backdrop-blur-md transition hover:bg-charcoal">
                    <FiHeart className={isWishlisted ? "fill-oat text-oat" : "text-milk"} />
                  </button>
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 rounded-md bg-charcoal/85 px-2 py-1 text-[10px] font-semibold text-milk backdrop-blur-md">
                    <svg className="w-2.5 h-2.5 text-oat" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    {recipe.rating}
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 rounded-md bg-charcoal/85 px-2 py-1 text-[10px] font-semibold text-oat backdrop-blur-md">
                    {recipe.difficulty}
                  </div>
                </div>

                <Link to={`/RecipesDetails/${recipe.id}`}>

                  <div className="mt-4 flex flex-col gap-3">

                    <div className="flex items-center gap-2">
                      <h3 className="break-words text-lg font-semibold leading-tight text-charcoal">{recipe.name}</h3>
                      {/* <span className="rounded-md bg-purple-600 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
                    NEW
                  </span> */}
                    </div>


                    <p className="text-sm leading-relaxed text-mocha">{recipe.ingredients[0]}, {recipe.ingredients[1]}, {recipe.ingredients[2]}, {recipe.ingredients[3]}...</p>

                    {/* Action Tags */}
                    <div className="mt-2 flex flex-wrap items-center justify-start gap-2">
                      <button className="rounded-full border border-taupe px-3 py-1 text-xs font-medium text-mocha transition hover:bg-oat">
                        {recipe.tags[0]}
                      </button>
                      <button className="rounded-full border border-taupe px-3 py-1 text-xs font-medium text-mocha transition hover:bg-oat">
                        {recipe.tags[1]}
                      </button>
                    </div>
                  </div>
                </Link>

              </div>

            )
          })}

        </div>
      </div>
    </ div>
  )
}

export default Recipes