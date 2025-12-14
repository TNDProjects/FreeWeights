import React from 'react';


function Header() {
  return (
    <header className="bg-dark text-light border-b border-light">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <h1 className="font-mono text-xl">
              freeweights
            </h1>
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