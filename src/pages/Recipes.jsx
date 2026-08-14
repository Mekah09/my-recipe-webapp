import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(response => response.json())
      .then(data => setRecipes(data.recipes))
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div>
          <h1>Recipes</h1>
        </div>
        <div className="flex flex-wrap justify-around">
          {recipes.map((items) => (
            <div key={items.id} className="m-4 overflow-hidden rounded-2xl bg-white p-4 shadow-md text-slate-800 2xl-96 xl:w-80 lg:w-64 md:w-48 s:w-40">

              <div className="flex h- w-full items-center justify-center rounded-xl md:shrink-0 ">
                <img
                  src={items.image}
                  alt={items.name}
                  className="max-h-full object-contain p-4"
                />
              </div>


              <div className="mt-4 flex flex-col gap-3">

                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900">{items.name}</h3>
                  <span className="rounded-md bg-purple-600 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
                    NEW
                  </span>
                </div>


                {/* <p className="text-sm text-slate-600 leading-relaxed">{items.ingredirnts}
                </p> */}

                {/* Action Tags */}
                <div className="mt-2 flex items-center justify-end gap-2">
                  <button className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-100">
                    {items.tags[0]}
                  </button>
                  <button className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-100">
                    {items.tags[1]}
                  </button>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </>
  )
}

export default Recipes