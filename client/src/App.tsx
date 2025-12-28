import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OneRepMaxPage from './pages/OneRepMaxCalculator/OneRepMaxPage';
import WorkoutLog from "../src/pages/WorkoutLog/Log/WorkoutLog.tsx";
import WorkoutHistory from './pages/WorkoutLog/WorkoutHistory/WorkoutHistory.tsx';
import LandingPage from "../src/pages/Landing/LandingPage.tsx";
import Header from './components/header.tsx';
import Footer from './components/footer.tsx';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-mono">
        <Header />
        <main className="min-h-screen px-4 sm:px-6 lg:px-12 flex flex-col items-center flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/orm-calculator" element={<OneRepMaxPage />} />
            <Route path="/log" element={<WorkoutLog />} />
            <Route path="/workouts" element={<WorkoutHistory />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
