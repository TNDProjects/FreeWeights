import { Link, useNavigate } from "react-router-dom";
import { Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import supabase from "../../supabaseClient";

interface HeaderProps {
  session: Session | null;
}

function Header({ session }: HeaderProps) {
  const navigate = useNavigate();

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved as "light" | "dark";
    return "dark";
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/signin");
  };

  return (
    <header className="px-4 sm:px-6 lg:px-12 border-b-2 border-dark dark:border-light">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-xl">freeweights</h1>
          </Link>
        </div>

        <div className="flex gap-7 items-center">
          <button onClick={toggleTheme}>
            {theme === "dark" ? (
              <Sun size={34} />
            ) : (
              <Moon color="black" size={34} />
            )}
          </button>

          <div className="hidden md:block">
            {session ? (
              <div className="flex gap-4">
                <Link to="/workouts">
                  <button className="text-sm px-4 py-2 hover:underline">
                    History
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-sm px-4 py-2 border-2 border-dark dark:border-light rounded-sm hover:bg-grey hover:text-light"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/signin">
                <button className="text-sm px-4 py-2 border-2 border-dark dark:border-light rounded-sm hover:bg-grey hover:text-light">
                  Sign In
                </button>
              </Link>
            )}
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
