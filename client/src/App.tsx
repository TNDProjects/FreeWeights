import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Session } from "@supabase/supabase-js";
import supabase from "../supabaseClient";
import {
  SignUp,
  SignIn,
  WorkoutLog,
  WorkoutHistory,
  OneRepMaxPage,
  LandingPage,
} from "./pages/index.ts";
import { Header, Footer, ScrollToTop } from "./components/index.ts";

function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);
  if (loading) {
    return null;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-mono">
        <Header session={session} />

        <main className="min-h-screen px-4 sm:px-6 lg:px-12 flex flex-col items-center grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/orm-calculator" element={<OneRepMaxPage />} />

            <Route
              path="/signup"
              element={
                !session ? <SignUp /> : <Navigate to="/workouts" replace />
              }
            />
            <Route
              path="/signin"
              element={
                !session ? <SignIn /> : <Navigate to="/workouts" replace />
              }
            />

            <Route
              path="/log"
              element={
                session ? <WorkoutLog /> : <Navigate to="/signin" replace />
              }
            />
            <Route
              path="/log/:id"
              element={
                session ? <WorkoutLog /> : <Navigate to="/signin" replace />
              }
            />
            <Route
              path="/workouts"
              element={
                session ? <WorkoutHistory /> : <Navigate to="/signin" replace />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
