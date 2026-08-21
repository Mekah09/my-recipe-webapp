import { Link } from "react-router-dom"
import { FaFeatherAlt } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="border-t border-mocha/30 bg-charcoal text-milk">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div data-aos="fade-up" className="max-w-sm space-y-4">
          <Link to="/" className="inline-flex items-center gap-3 text-lg font-semibold tracking-[0.18em] transition-colors hover:text-oat">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-taupe/60 text-oat">
              <FaFeatherAlt className="text-base" />
            </span>
            Haykay
          </Link>
          <p className="text-sm leading-6 text-taupe">
            Reliable recipes, clear instructions, and good food for the people around your table.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-oat">Explore</h2>
          <nav className="mt-4 flex flex-col items-start gap-3 text-sm text-taupe" aria-label="Footer navigation">
            <Link to="/" className="transition-colors hover:text-milk">Home</Link>
            <Link to="/Recipes" className="transition-colors hover:text-milk">All Recipes</Link>
            <Link to="/Wishlist" className="transition-colors hover:text-milk">Saved Recipes</Link>
          </nav>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-oat">Haykay kitchen</h2>
          <p className="mt-4 max-w-xs text-sm leading-6 text-taupe">
            Make something worth sharing, one straightforward step at a time.
          </p>
        </div>
      </div>

      <div className="border-t border-mocha/30">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-taupe sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2026 Haykay. Made for home cooks.</span>
          <Link to="/Recipes" className="font-semibold text-oat transition-colors hover:text-milk">Start cooking →</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer