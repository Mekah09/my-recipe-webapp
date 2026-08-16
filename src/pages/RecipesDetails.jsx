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
        <span onClick={() => goback()} className="Hover">Back to All Recipes</span>
      </div>

      <div>
        <div className="flex flex-wrap m-5">
          <div className="rounded-2xl overflow-hidden lg:w-96 md:w-48 sm:w-40 bg-[#1c2130] border border-white/10 shadow-md">
            <img
              src={findRecipesDetails?.image}
              alt={findRecipesDetails?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="m-5">
            <h1 className="text-5xl font-display font-extrabold tracking-tight">
              {findRecipesDetails?.name}
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
              A classic {findRecipesDetails?.cuisine} recipe packed with fresh flavor. Easy to follow, scalable for any gathering, and delicious every time.
            </p>
          </div>
        </div>
        {/* {findRecipesDetails?.name} */}
      </div>
    </>
  )
}

export default RecipesDetails