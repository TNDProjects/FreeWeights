import { Link } from 'react-router-dom';
import { Weight } from 'lucide-react';
import { Dumbbell } from 'lucide-react';
import { Apple } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

function LandingPage() {
  return (
    <div className="w-full max-w-3xl flex flex-col items-center">

      {/* header section */}
      <section className="w-full flex flex-col justify-center py-48" id="header-section">
        <h2 className="text-3xl lg:text-4xl leading-12 mb-8">
          your <u>all-in-one</u><br />
          fitness and<br />
          nutrition<br />
          toolkit.
        </h2>
        <Link to="/signup" className="border-2 border-dark dark:border-light text-m tracking-tight px-5 py-2 rounded w-fit hover:bg-grey hover:text-light cursor-pointer">
          get started
        </Link>
      </section>

      {/* about section */}
      <section className="" id="about-section">
        <h3 className="text-sm text-grey mb-1">about</h3>
        <p className="text-lg tracking-tight">
          <i>freeweights</i> is a free, open-source, minimalistic web app for tracking your daily fitness and nutrition — complete with tools to assist you in workouts, calculate macros, and track your progress toward your goals.
        </p>
      </section>

      {/* spacer */}
      <div className="bg-grey my-20 w-9/12 h-px"></div>

      {/* tools section */}
      <section className="w-full" id="tools-section">
        <h3 className="text-sm text-grey mb-1">tools</h3>

        <div className="flex flex-col gap-5">
          <Link
            to="/workouts"
            className="flex items-center justify-between border-2 border-dark dark:border-light rounded-lg px-4 py-3 hover:border-grey hover:text-grey transition-colors group"
          >
            <div className="flex items-center gap-4">
              <CalendarDays />
              <div>
                <p className="text-lg tracking-tight">workout /</p>
                <p className="text-lg tracking-tight">nutrition log</p>
              </div>
            </div>
            <ChevronRight />
          </Link>

          <Link
            to="/orm-calculator"
            className="flex items-center justify-between border-2 border-dark dark:border-light rounded-lg px-4 py-3 hover:border-grey hover:text-grey transition-colors group"
          >
            <div className="flex items-center gap-4">
              <Weight />
              <div>
                <p className="text-lg tracking-tight">one-rep max</p>
                <p className="text-lg tracking-tight">calculator</p>
              </div>
            </div>
            <ChevronRight />
          </Link>

          <Link
            to="/nutrition-calculator"
            className="flex items-center justify-between border-2 border-dark dark:border-light rounded-lg px-4 py-3 hover:border-grey hover:text-grey transition-colors group"
          >
            <div className="flex items-center gap-4">
              <Apple />
              <div>
                <p className="text-lg tracking-tight">nutrition</p>
                <p className="text-lg tracking-tight">calculator</p>
              </div>
            </div>
            <ChevronRight />
          </Link>

          <Link
            to="/barbell-visualizer"
            className="flex items-center justify-between border-2 border-dark dark:border-light rounded-lg px-4 py-3 hover:border-grey hover:text-grey transition-colors group"
          >
            <div className="flex items-center gap-4">
              <Dumbbell />
              <div>
                <p className="text-lg tracking-tight">barbell weight</p>
                <p className="text-lg tracking-tight">visualizer</p>
              </div>
            </div>
            <ChevronRight />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
