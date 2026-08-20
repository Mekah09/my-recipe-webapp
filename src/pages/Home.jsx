import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"


const Home = () => {

  const [recipesDetails, setRecipesDetails] = useState(null)

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/1")
      .then(response => response.json())
      .then(data => setRecipesDetails(data))
  }, []);

  const findRecipesDetails = recipesDetails;


  return (
    <div className="min-h-screen w-full bg-milk text-charcoal">
      <Navbar />
      <section className="relative py-12 lg:py-18 overflow-hidden bg-oat">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal border border-white/10 text-xs font-semibold text-milk">
                <span className="w-1.5 h-1.5 rounded-full bg-milk"></span>
                <span>Tested recipes for real home kitchens</span>
              </div>
              <div className="space-y-3">
                <h1 className="break-words text-4xl font-display font-extrabold leading-[1.1] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
                  Good food,
                  <br />
                  <span className="font-editorial italic font-normal text-mocha text-5xl sm:text-6xl lg:text-7xl">
                    simply cooked.
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-mocha max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
                  Clear ingredient ratios, practical step-by-step instructions, and straightforward cooking times. No fluff—just reliable dishes that turn out delicious every time.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button type="button" className="px-6 py-3 rounded-xl bg-charcoal text-oat hover:text-milk font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center gap-2">
                  <span>View Classic Recipe</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
                <Link className="px-6 py-3 rounded-xl bg-mocha text-milk hover:text-oat border border-milk/10 text-xs sm:text-sm font-semibold transition-colors" to="/Recipes">
                  Browse All Recipes
                </ Link>
              </div>
              <div className="pt-6 border-t border-white/10">
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-2.5">
                  Featured This Week
                </span>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <button className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-white text-black font-bold shadow-xs">
                    Classic
                  </button>
                  <button className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-[#141721] border border-white/10 text-gray-400 hover:text-white">
                    Vegetarian
                  </button>
                  <button className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-[#141721] border border-white/10 text-gray-400 hover:text-white">
                    Brown
                  </button>
                  <button className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all bg-[#141721] border border-white/10 text-gray-400 hover:text-white">
                    Creamy
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="recipe-card p-4 sm:p-5 w-full max-w-md cursor-pointer group space-y-4 border border-oat bg-milk rounded-3xl">
                <div className="relative aspect-4/3 rounded-xl overflow-hidden">
                  <img
                    alt={findRecipesDetails?.name}
                    src={findRecipesDetails?.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-milk border border-white/10">
                    {findRecipesDetails?.cuisine}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-white border border-white/10 flex items-center gap-1">
                    <svg className="w-3 h-3 text-[#f4a261]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span>{findRecipesDetails?.rating}</span>
                    <span className="text-gray-400 text-[10px]">
                      ({findRecipesDetails?.reviewCount})
                    </span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] font-semibold text-taupe uppercase tracking-wider">
                    Weeknight Dinner
                  </span>
                  <h3 className="break-words font-display text-lg font-bold text-charcoal sm:text-xl">
                    {findRecipesDetails?.name}
                  </h3>
                  <p className="text-xs text-mocha line-clamp-2 leading-relaxed">
                    Crispy thin crust with fresh San Marzano tomato sauce, torn mozzarella, and fragrant fresh basil leaves.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg><span>35 mins total</span>
                  </div>
                  <div className="flex items-center gap-1 text-mocha font-semibold">
                    <span>{findRecipesDetails?.caloriesPerServing} kcal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 border-t border-white/5 bg-mocha">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-milk tracking-tight">
              Recipes you can actually rely on
            </h2>
            <p className="text-xs sm:text-sm text-oat">
              Clear steps, standard pantry ingredients, and realistic time estimates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-charcoal p-6 rounded-2xl border border-milk/10 space-y-2.5">
              <div className="w-7 h-7 rounded-lg bg-mocha flex items-center justify-center text-xs font-bold text-milk">
                01
              </div>
              <h3 className="font-display font-bold text-base text-milk">
                Tested Multiple Times
              </h3>
              <p className="text-xs text-oat leading-relaxed font-normal">
                Every recipe is prepared in a standard home kitchen with everyday cookware to ensure repeatable results.
              </p>
            </div>
            <div className="bg-charcoal p-6 rounded-2xl border border-milk/10 space-y-2.5">
              <div className="w-7 h-7 rounded-lg bg-mocha flex items-center justify-center text-xs font-bold text-milk">
                02
              </div>
              <h3 className="font-display font-bold text-base text-milk">
                Honest Timing Estimates
              </h3>
              <p className="text-xs text-oat leading-relaxed font-normal">
                Real prep and cook times that include chopping and cleanup—not idealized professional kitchen speeds.
              </p>
            </div>
            <div className="bg-charcoal p-6 rounded-2xl border border-milk/10 space-y-2.5">
              <div className="w-7 h-7 rounded-lg bg-mocha flex items-center justify-center text-xs font-bold text-milk">
                03
              </div>
              <h3 className="font-display font-bold text-base text-milk">
                Flexible Ingredients
              </h3>
              <p className="text-xs text-oat leading-relaxed font-normal">
                Clear notes on pantry substitutions, diet variations, and seasoning adjustments for your taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section  className="py-16 border-t border-white/5"><div  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div  className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"><div  className="space-y-1.5"><span  className="text-xs font-bold uppercase tracking-wider text-[#f4a261]">Community Favorites</span><h2  className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">Trending Recipes</h2><p  className="text-xs sm:text-sm text-gray-400 max-w-md">Reliable, flavor-packed dishes rated 4.5 stars and above by home cooks.</p></div><div  className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none"><button  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all bg-white text-black font-bold shadow-xs">All Picks</button><button  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all bg-[#141721] border border-white/10 text-gray-400 hover:text-white">Pastas &amp; Italian</button><button  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all bg-[#141721] border border-white/10 text-gray-400 hover:text-white">Noodles &amp; Asian</button><button  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all bg-[#141721] border border-white/10 text-gray-400 hover:text-white">Weeknight Dinners</button><button  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all bg-[#141721] border border-white/10 text-gray-400 hover:text-white">Bakes &amp; Desserts</button><button  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all bg-[#141721] border border-white/10 text-gray-400 hover:text-white">Mexican &amp; Tacos</button></div></div><div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><div  className="recipe-card p-3.5 flex flex-col justify-between cursor-pointer group"><div><div  className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#1c2130] mb-3"><img alt="Classic Margherita Pizza"  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://cdn.dummyjson.com/recipe-images/1.webp"><span  className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md text-[#f4a261] text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/10">Italian</span><button type="button"  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-colors bg-black/60 text-gray-300 hover:text-white border border-white/15" title="Save recipe"><svg  className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button><div  className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 border border-white/10"><svg  className="w-2.5 h-2.5 text-[#f4a261]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><span>4.6</span></div></div><div  className="space-y-1.5 px-0.5"><h3  className="font-display font-bold text-sm text-white line-clamp-1 group-hover:text-[#f4a261] transition-colors">Classic Margherita Pizza</h3><p  className="text-xs text-gray-400 line-clamp-2 leading-relaxed">Pizza dough, Tomato sauce, Fresh mozzarella cheese...</p></div></div><div  className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400"><span  className="flex items-center gap-1 text-gray-300">⏱ 35m</span><span  className="text-[#f4a261] font-semibold">300 kcal</span></div></div><div  className="recipe-card p-3.5 flex flex-col justify-between cursor-pointer group"><div><div  className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#1c2130] mb-3"><img alt="Vegetarian Stir-Fry"  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://cdn.dummyjson.com/recipe-images/2.webp"><span  className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md text-[#f4a261] text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/10">Asian</span><button type="button"  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-colors bg-black/60 text-gray-300 hover:text-white border border-white/15" title="Save recipe"><svg  className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button><div  className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 border border-white/10"><svg  className="w-2.5 h-2.5 text-[#f4a261]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><span>4.7</span></div></div><div  className="space-y-1.5 px-0.5"><h3  className="font-display font-bold text-sm text-white line-clamp-1 group-hover:text-[#f4a261] transition-colors">Vegetarian Stir-Fry</h3><p  className="text-xs text-gray-400 line-clamp-2 leading-relaxed">Tofu, cubed, Broccoli florets, Carrots, sliced...</p></div></div><div  className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400"><span  className="flex items-center gap-1 text-gray-300">⏱ 35m</span><span  className="text-[#f4a261] font-semibold">250 kcal</span></div></div><div  className="recipe-card p-3.5 flex flex-col justify-between cursor-pointer group"><div><div  className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#1c2130] mb-3"><img alt="Chocolate Chip Cookies"  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://cdn.dummyjson.com/recipe-images/3.webp"><span  className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md text-[#f4a261] text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/10">American</span><button type="button"  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-colors bg-black/60 text-gray-300 hover:text-white border border-white/15" title="Save recipe"><svg  className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button><div  className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 border border-white/10"><svg  className="w-2.5 h-2.5 text-[#f4a261]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><span>4.9</span></div></div><div  className="space-y-1.5 px-0.5"><h3  className="font-display font-bold text-sm text-white line-clamp-1 group-hover:text-[#f4a261] transition-colors">Chocolate Chip Cookies</h3><p  className="text-xs text-gray-400 line-clamp-2 leading-relaxed">All-purpose flour, Butter, softened, Brown sugar...</p></div></div><div  className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400"><span  className="flex items-center gap-1 text-gray-300">⏱ 25m</span><span  className="text-[#f4a261] font-semibold">150 kcal</span></div></div><div  className="recipe-card p-3.5 flex flex-col justify-between cursor-pointer group"><div><div  className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#1c2130] mb-3"><img alt="Chicken Alfredo Pasta"  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://cdn.dummyjson.com/recipe-images/4.webp"><span  className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md text-[#f4a261] text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/10">Italian</span><button type="button"  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-colors bg-black/60 text-gray-300 hover:text-white border border-white/15" title="Save recipe"><svg  className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button><div  className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 border border-white/10"><svg  className="w-2.5 h-2.5 text-[#f4a261]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><span>4.9</span></div></div><div  className="space-y-1.5 px-0.5"><h3  className="font-display font-bold text-sm text-white line-clamp-1 group-hover:text-[#f4a261] transition-colors">Chicken Alfredo Pasta</h3><p  className="text-xs text-gray-400 line-clamp-2 leading-relaxed">Fettuccine pasta, Chicken breast, sliced, Heavy cream...</p></div></div><div  className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400"><span  className="flex items-center gap-1 text-gray-300">⏱ 35m</span><span  className="text-[#f4a261] font-semibold">500 kcal</span></div></div><div  className="recipe-card p-3.5 flex flex-col justify-between cursor-pointer group"><div><div  className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#1c2130] mb-3"><img alt="Mango Salsa Chicken"  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://cdn.dummyjson.com/recipe-images/5.webp"><span  className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md text-[#f4a261] text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/10">Mexican</span><button type="button"  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-colors bg-black/60 text-gray-300 hover:text-white border border-white/15" title="Save recipe"><svg  className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button><div  className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 border border-white/10"><svg  className="w-2.5 h-2.5 text-[#f4a261]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><span>4.9</span></div></div><div  className="space-y-1.5 px-0.5"><h3  className="font-display font-bold text-sm text-white line-clamp-1 group-hover:text-[#f4a261] transition-colors">Mango Salsa Chicken</h3><p  className="text-xs text-gray-400 line-clamp-2 leading-relaxed">Chicken thighs, Mango, diced, Red onion, finely chopped...</p></div></div><div  className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400"><span  className="flex items-center gap-1 text-gray-300">⏱ 40m</span><span  className="text-[#f4a261] font-semibold">380 kcal</span></div></div><div  className="recipe-card p-3.5 flex flex-col justify-between cursor-pointer group"><div><div  className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#1c2130] mb-3"><img alt="Quinoa Salad with Avocado"  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://cdn.dummyjson.com/recipe-images/6.webp"><span  className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md text-[#f4a261] text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/10">Mediterranean</span><button type="button"  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-colors bg-black/60 text-gray-300 hover:text-white border border-white/15" title="Save recipe"><svg  className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button><div  className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 border border-white/10"><svg  className="w-2.5 h-2.5 text-[#f4a261]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><span>4.4</span></div></div><div  className="space-y-1.5 px-0.5"><h3  className="font-display font-bold text-sm text-white line-clamp-1 group-hover:text-[#f4a261] transition-colors">Quinoa Salad with Avocado</h3><p  className="text-xs text-gray-400 line-clamp-2 leading-relaxed">Quinoa, cooked, Avocado, diced, Cherry tomatoes, halved...</p></div></div><div  className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400"><span  className="flex items-center gap-1 text-gray-300">⏱ 35m</span><span  className="text-[#f4a261] font-semibold">280 kcal</span></div></div><div  className="recipe-card p-3.5 flex flex-col justify-between cursor-pointer group"><div><div  className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#1c2130] mb-3"><img alt="Tomato Basil Bruschetta"  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://cdn.dummyjson.com/recipe-images/7.webp"><span  className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md text-[#f4a261] text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/10">Italian</span><button type="button"  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-colors bg-black/60 text-gray-300 hover:text-white border border-white/15" title="Save recipe"><svg  className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button><div  className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 border border-white/10"><svg  className="w-2.5 h-2.5 text-[#f4a261]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><span>4.7</span></div></div><div  className="space-y-1.5 px-0.5"><h3  className="font-display font-bold text-sm text-white line-clamp-1 group-hover:text-[#f4a261] transition-colors">Tomato Basil Bruschetta</h3><p  className="text-xs text-gray-400 line-clamp-2 leading-relaxed">Baguette, sliced, Tomatoes, diced, Fresh basil, chopped...</p></div></div><div  className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400"><span  className="flex items-center gap-1 text-gray-300">⏱ 25m</span><span  className="text-[#f4a261] font-semibold">120 kcal</span></div></div><div  className="recipe-card p-3.5 flex flex-col justify-between cursor-pointer group"><div><div  className="relative aspect-4/3 rounded-xl overflow-hidden bg-[#1c2130] mb-3"><img alt="Beef and Broccoli Stir-Fry"  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://cdn.dummyjson.com/recipe-images/8.webp"><span  className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-md text-[#f4a261] text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/10">Asian</span><button type="button"  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full flex items-center justify-center backdrop-blur-md transition-colors bg-black/60 text-gray-300 hover:text-white border border-white/15" title="Save recipe"><svg  className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button><div  className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 border border-white/10"><svg  className="w-2.5 h-2.5 text-[#f4a261]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><span>4.7</span></div></div><div  className="space-y-1.5 px-0.5"><h3  className="font-display font-bold text-sm text-white line-clamp-1 group-hover:text-[#f4a261] transition-colors">Beef and Broccoli Stir-Fry</h3><p  className="text-xs text-gray-400 line-clamp-2 leading-relaxed">Beef sirloin, thinly sliced, Broccoli florets, Soy sauce...</p></div></div><div  className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400"><span  className="flex items-center gap-1 text-gray-300">⏱ 35m</span><span  className="text-[#f4a261] font-semibold">380 kcal</span></div></div></div></div></section> */}

      <section className="py-16 border-t border-milk/5 bg-oat text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-5">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal tracking-tight">
            Ready to cook dinner?
          </h2>
          <p className="text-sm text-mocha max-w-md mx-auto leading-relaxed">
            Browse our full catalog of tested recipes and start cooking in under 30 minutes.
          </p>
          <div className="pt-2">
            <Link className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-mocha text-milk hover:text-oat border border-milk/10 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md" to="/Recipes">
              <span>Explore All Recipes</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>
        </div>
      </section>



    </div>
  )
}

export default Home