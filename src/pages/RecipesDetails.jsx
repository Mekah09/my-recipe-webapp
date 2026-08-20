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
  const [recipeInstructions, setRecipeInstructions] = useState([])
  const [recipeIngredients, setRecipeIngredients] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(response => response.json())
      .then(data => setRecipesDetails(data.recipes))
  }, [id]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(response => response.json())
      .then(data => {
        const recipe = data.recipes.find((item) => item.id === Number(id));
        setRecipeInstructions(recipe?.instructions ?? []);
        setRecipeIngredients(recipe?.ingredients ?? []);
      })
  }, [id]);

  const findRecipesDetails = recipesDetails.find((e) => e.id === Number(id));

  return (
    <>

      <div className="min-h-screen w-full bg-milk text-charcoal">
        <div className="mx-auto max-w-7xl px-5 pb-5 pt-8 sm:px-8">
          <button className="flex items-center gap-2 text-sm font-medium text-mocha transition hover:text-charcoal">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <span onClick={() => goback()}>Back to All Recipes</span>
          </button>

        </div>

        <main className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
            <div className="aspect-[3/2] overflow-hidden rounded-xl border border-oat bg-oat shadow-xl shadow-mocha/10">
              <img
                src={findRecipesDetails?.image}
                alt={findRecipesDetails?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 pt-2 lg:pt-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-oat px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-mocha">
                  {findRecipesDetails?.cuisine} Cuisine
                </span>
                <span className="rounded-md border border-taupe px-2.5 py-1 text-xs font-medium text-mocha">
                  {findRecipesDetails?.difficulty}
                </span>
                <div className="flex items-center gap-1 text-xs text-mocha sm:ml-auto">
                  <svg className="h-3.5 w-3.5 text-taupe" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span className="font-semibold ">{findRecipesDetails?.rating}</span>
                  <span className="text-[11px] text-taupe">({findRecipesDetails?.reviewCount} reviews)</span>
                </div>
              </div>
              <h1 className="mt-7 break-words text-4xl font-semibold tracking-tight sm:text-6xl">
                {findRecipesDetails?.name}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-mocha">
                A classic {findRecipesDetails?.cuisine} recipe packed with fresh flavor. Easy to follow, scalable for any gathering, and delicious every time.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-milk/10">
                <div className="bg-mocha p-3 rounded-xl border border-milk/10 text-center">
                  <span className="text-[10px] text-oat uppercase font-semibold block">
                    Prep Time
                  </span>
                  <span className="text-sm font-bold text-milk mt-0.5 block">
                    {findRecipesDetails?.prepTimeMinutes} mins
                  </span>
                </div>
                <div className="bg-mocha p-3 rounded-xl border border-milk/10 text-center">
                  <span className="text-[10px] text-oat uppercase font-semibold block">
                    Cook Time
                  </span>
                  <span className="text-sm font-bold text-milk mt-0.5 block">
                    {findRecipesDetails?.cookTimeMinutes} mins
                  </span>
                </div>
                <div className="bg-mocha p-3 rounded-xl border border-milk/10 text-center">
                  <span className="text-[10px] text-oat uppercase font-semibold block">
                    Calories
                  </span>
                  <span className="text-sm font-bold text-milk mt-0.5 block">
                    {findRecipesDetails?.caloriesPerServing} kcal
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
            <div className="md:col-span-5 space-y-5">
              <div className="bg-mocha rounded-2xl p-5 border border-milk/10 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-milk/10">
                  <div>
                    <h2 className="text-lg font-display font-bold text-milk">
                      Ingredients</h2>
                    {/* <span className="text-[11px] text-oat">
                      6 items</span> */}
                  </div>
                </div>

                <ul className="space-y-2 pt-1">
                  {recipeIngredients.map((ingredients, index) => (
                    <li key={`${index}-${ingredients}`} className="flex items-start gap-2.5 p-2.5 rounded-xl cursor-pointer transition-all border bg-taupe border-milk/5 hover:border-milk/15 text-gray-200">
                      <span className="text-xs font-normal leading-relaxed">
                        {ingredients}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="bg-mocha rounded-2xl p-6 border border-milk/10 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-milk/10">
                  <div><h2 className="text-lg font-display font-bold text-milk">Instructions</h2>
                    {/* <p className="text-[11px] text-oat">Step 0 of 6 completed</p> */}
                  </div>
                </div>
                <div className="space-y-3.5">
                  {recipeInstructions.map((instructions, index) => (
                    <div key={`${index}-${instructions}`} className="p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 bg-taupe border-milk/5 hover:border-milk/20">
                      <div className="flex-none w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs bg-mocha text-gray-300">{index + 1}
                      </div>
                      <div className="grow space-y-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-oat block">Step {index + 1}
                        </span>
                        <p className="text-xs sm:text-sm leading-relaxed text-gray-200">
                          {instructions}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default RecipesDetails