import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

function Header() {
  return (
      <header className="px-4 sm:px-6 lg:px-12 border-b border-light">
        <div className="flex justify-between justify-center items-center h-16">

          <div className=" flex items-center">
            <Link to="/">
              <h1 className="font-mono text-xl">
                freeweights
              </h1>
            </Link>
          </div>

          <div className="hidden md:block">
            <button className="text-sm bg-light text-dark px-4 py-2 rounded hover:bg-grey hover:text-light transition-colors">
              sign up
            </button>
          </div>

          <button className="md:hidden text-light">
            <Menu size={36}/>
          </button>
        </div>
      </header>
  );
}

export default Header;