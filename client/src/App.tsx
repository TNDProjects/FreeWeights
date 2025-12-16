import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OneRepMaxPage from './pages/OneRepMaxCalculator/OneRepMaxPage';
import WorkoutLog from "../src/pages/WorkoutLog/WorkoutLog.tsx";
import LandingPage from "../src/pages/Landing/LandingPage.tsx";
import Header from './components/header';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="bg-dark text-light flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/orm-calculator" element={<OneRepMaxPage />} />
            <Route path="/log" element={<WorkoutLog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
