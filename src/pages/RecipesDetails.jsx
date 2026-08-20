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
      <div className="min-h-screen w-full bg-milk text-charcoal">
        <div className="mx-auto max-w-7xl px-5 pb-5 pt-8 sm:px-8">
          <button className="flex items-center gap-2 text-sm font-medium text-mocha transition hover:text-charcoal">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <span onClick={() => goback()}>Back to All Recipes</span>
          </button>

        </div>

        <main className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start">
            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-oat bg-oat shadow-xl shadow-mocha/10">
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
                </div></div>
              <h1 className="mt-7 break-words text-4xl font-semibold tracking-tight sm:text-6xl">
                {findRecipesDetails?.name}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-mocha">
                A classic {findRecipesDetails?.cuisine} recipe packed with fresh flavor. Easy to follow, scalable for any gathering, and delicious every time.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default RecipesDetails