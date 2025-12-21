import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="text-light border-b border-light">
      <div className=" px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between justify-center items-center h-16">

          <div className=" flex items-center">
            <Link to="/">
              <h1 className="font-mono text-xl">
                freeweights
              </h1>
            </Link>
          </div>

          <div className="hidden md:block">
            <button className="font-mono text-sm bg-light text-dark px-4 py-2 rounded hover:bg-grey hover:text-light transition-colors">
              sign up
            </button>
          </div>

          <button className="md:hidden text-light">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;