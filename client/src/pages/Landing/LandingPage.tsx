import { Link } from 'react-router-dom';
import { Weight } from 'lucide-react';
import { Dumbbell } from 'lucide-react';
import { Apple } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

function LandingPage() {
  return (
    <div className="min-h-screen bg-dark text-light font-mono flex flex-col items-center">
      <main className="max-w-3xl flex-1 flex flex-col px-6">
        <section className="flex-1 flex flex-col justify-center py-48">
          <h2 className="text-3xl lg:text-4xl leading-tight mb-8">
            your <u>all-in-one</u><br/>
            fitness and<br/>
            nutrition<br/>
            toolkit.
          </h2>
          
          <Link to="/signup" className="bg-light text-dark text-m tracking-tight px-5 py-2 rounded w-fit hover:bg-grey hover:text-light transition-colors cursor-pointer">
            get started
          </Link>
        </section>

        {/* about section */}
        <section className="py-8">
        <h3 className="text-sm text-grey mb-1">about</h3>
          <p className="text-m tracking-tight">
            <i>freeweights</i> is a free, open-source, minimalistic web app for tracking your daily fitness. log workouts, complete with tools to assist you in workouts, calculate macros, and achieve your goals.
          </p>
        </section>

        {/* tools section */}
        <section className="py-24">
          <h3 className="text-sm text-grey mb-1">tools</h3>
          
          <div className="space-y-3">
            <Link 
              to="/log" 
              className="flex items-center justify-between border border-light text-light rounded-lg px-4 py-3 hover:border-grey hover:text-grey transition-colors group"
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
              className="flex items-center justify-between border border-light rounded-lg px-4 py-3 hover:border-grey hover:text-grey transition-colors group"
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
              className="flex items-center justify-between border border-light rounded-lg px-4 py-3 hover:border-grey hover:text-grey transition-colors group"
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
              to="/weight-visualizer" 
              className="flex items-center justify-between border border-light rounded-lg px-4 py-3 hover:border-grey hover:text-grey transition-colors group"
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
      </main>
    </div>
  );
}

export default LandingPage;