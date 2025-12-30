import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved as 'light' | 'dark';
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="px-4 sm:px-6 lg:px-12 border-b-2 border-dark dark:border-light">
      <div className="flex justify-between justify-center items-center h-16">

        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-xl">
              freeweights
            </h1>
          </Link>
        </div>

        <div className="flex gap-7">
          <button onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={34} /> : <Moon color="black" size={34} />}
          </button>

          <div className="hidden md:block">
            <Link to="/signup">
              <button className="text-sm px-4 py-2 border-2 border-dark dark:border-light rounded hover:bg-grey hover:text-light">
                sign up
              </button>
            </Link>

          </div>

          <button className="md:hidden">
            <Menu size={34} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
