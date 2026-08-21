import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipesDetails from './pages/RecipesDetails';
import Wishlist from './pages/Wishlist';
import Error404 from './pages/Error404';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/RecipesDetails" element={<RecipesDetails />} />
        <Route path="/RecipesDetails/:id" element={<RecipesDetails />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;