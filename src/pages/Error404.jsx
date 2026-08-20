import { Link } from "react-router-dom"

const Error404 = () => {
  return (
    <div className="min-h-screen bg-milk text-charcoal">
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-taupe">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-charcoal sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg text-mocha">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-charcoal px-4 py-3 text-sm font-semibold text-milk shadow-lg transition hover:bg-mocha focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
            >
              Go back home
            </Link>
            <a href="#" className="text-sm font-semibold text-mocha transition hover:text-charcoal">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Error404