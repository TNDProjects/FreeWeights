import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../../../supabaseClient.ts";
import { Button } from "../../../components/ui/Button";
import { DataTable } from "../../../components/ui/DataTable";
import { historyColumns } from "./historyColumns";
import type { SavedWorkout } from "../types/types";

const WorkoutHistory = () => {
  const [history, setHistory] = useState<SavedWorkout[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchHistory = async () => {
    const { data, error } = await supabase
      .from("workouts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching history:", error);
    } else if (data) {
      const formattedHistory = data.map((workout) => ({
        id: workout.id,
        userId: workout.user_id,
        name: workout.name,
        date: new Date(workout.created_at).toLocaleDateString(),
        exercises: workout.exercises,
      }));

      setHistory(formattedHistory as SavedWorkout[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-6 pt-12">
      <div className="flex justify-between items-center px-2">
        <h2 className="text-xl text-light uppercase font-bold tracking-tight">
          Past Workouts
        </h2>
        <Button variant="outline" onClick={() => navigate("/log")}>
          + New Workout
        </Button>
      </div>

      <div className="w-full">
        {loading ? (
          <div className="text-center text-muted-foreground py-10">
            Loading your gains...
          </div>
        ) : (
          <DataTable columns={historyColumns} data={history} />
        )}
      </div>
    </div>
  );
};

export default WorkoutHistory;
