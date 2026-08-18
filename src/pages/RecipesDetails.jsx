import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const RecipesDetails = () => {
  const navigate = useNavigate();

  function goback() {
    navigate(-1)
  }

  const { id } = useParams();
  const [recipesDetails, setRecipesDetails] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(response => response.json())
      .then(data => setRecipesDetails(data.recipes))
  }, [id]);

  const findRecipesDetails = recipesDetails.find((e) => e.id === Number(id));

  return (
    <>
      <Navbar />
      <div className="m-5">
        <button className="flex items-center gap-1.5 ">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span onClick={() => goback()} className="Hover">Back to All Recipes</span>
        </button>

      </div>

      <div>
        <div className="flex flex-wrap m-5">
          <div className="rounded-2xl overflow-hidden lg:w-96  border border-white/10 shadow-md mr-2 mt-2">
            <img
              src={findRecipesDetails?.image}
              alt={findRecipesDetails?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-2">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-md text-gray-800 text-xs font-semibold border border-black">
                {findRecipesDetails?.cuisine} Cuisine
              </span>
              <span class="px-2.5 py-0.5 rounded-md text-gray-800 text-xs font-medium border border-gray-500">
                {findRecipesDetails?.difficulty}
              </span>
              <div class="flex items-center gap-1 text-xs text-gray-800 ml-auto">
                <svg class="w-3.5 h-3.5 text-[#f4a261]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span class="font-semibold ">{findRecipesDetails?.rating}</span>
                <span class="text-gray-500 text-[11px]">({findRecipesDetails?.reviewCount} reviews)</span>
              </div></div>
            <h1 className="text-5xl font-display font-extrabold tracking-tight">
              {findRecipesDetails?.name}
            </h1>
            <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-normal">
              A classic {findRecipesDetails?.cuisine} recipe packed with fresh flavor. Easy to follow, scalable for any gathering, and delicious every time.
            </p>
          </div>
        </div>
        {findRecipesDetails?.name}
      </div>
    </>
  )
}

export default RecipesDetails