import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
// import SearchMenu from "../components/SearchMenu";

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
          <div className="shadow-md p-5 text-slate-800 text-center m-5 ">
            <h1 className="text-5xl font-semibold m-5">Recipe Directory</h1>
            <p>Search our collection of different Cuisine of food based on event, cost, time of preperation we get you covered always</p>
          </div>
          <div>
            {/* <SearchMenu/> */}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-4">
          {recipes.map((items) => (
            <div key={items.id} className="overflow-hidden rounded-2xl bg-white shadow-md text-slate-800 p-3.5 flex flex-col justify-between cursor-pointer transition hover:scale-105 hover:shadow-lg">

              <div className="flex h- w-full items-center justify-center rounded-2xl md:shrink-0 ">
                <img
                  src={items.image}
                  alt={items.name}
                  className="max-h-full object-contain rounded-2xl transition hover:scale-105"
                />
              </div>


              <div className="mt-4 flex flex-col gap-3">

                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-slate-900">{items.name}</h3>
                  {/* <span className="rounded-md bg-purple-600 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-white">
                    NEW
                  </span> */}
                </div>


                <p className="text-sm text-slate-600 leading-relaxed">{items.ingredients[0]}, {items.ingredients[1]}, {items.ingredients[2]}, {items.ingredients[3]}...</p>

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