import OneRepMaxPage from './pages/OneRepMaxCalculator/OneRepMaxPage';
import Header from './components/header';
import Footer from './components/footer';
import WorkoutLog from "../src/pages/WorkoutLog/WorkoutLog.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <OneRepMaxPage />
        <WorkoutLog />
      </main>
      <Footer />
    </>
  );
}
export default App;
