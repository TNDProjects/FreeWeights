import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import supabase from "../../../../supabaseClient.ts";
import { Input } from "../../../components/ui/Input.tsx";
import { Button } from "../../../components/ui/Button.tsx";
import { CalendarDays } from "lucide-react";
import PageHeader from "../../../components/PageHeader";
import WorkoutLogEntry from "./WorkoutLogEntry.tsx";
import { DataTable } from "../../../components/ui/DataTable.tsx";
import { columns } from "./columns";
import type {
  WorkoutLogRow,
  SingleEntry,
  EnterLiftForm,
} from "../types/types.ts";

const WorkoutLog = () => {
  const [logData, setLogData] = useState<WorkoutLogRow[]>([]);
  const [workoutName, setWorkoutName] = useState<string>("");
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchWorkoutToEdit = async () => {
      if (!params.id) return;

      const { data, error } = await supabase
        .from("workouts")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error) {
        console.error("Error fetching workout:", error);

        // navigate("/workouts");
      } else if (data) {
        setLogData(data.exercises); // Load the exercises
        setWorkoutName(data.name); // Load the name
      }
    };

    fetchWorkoutToEdit();
  }, [params.id]);
  const handleAddSet = (form: EnterLiftForm) => {
    const expandedSets: SingleEntry[] = Array.from(
      {
        length: form.sets,
      },
      () => ({
        userId: form.id,
        id: form.id,
        setCount: form.sets,
        reps: form.reps,
        weight: form.weight,
        notes: form.notes,
      }),
    );
    setLogData((prev) => {
      const isExisting = prev.find((lift) => lift.name === form.name);
      if (!isExisting) {
        return [
          {
            id: crypto.randomUUID(),
            name: form.name,
            sets: expandedSets,
          },
          ...prev,
        ];
      }
      return prev.map((lift) =>
        lift.name === form.name
          ? { ...lift, sets: [...lift.sets, ...expandedSets] }
          : lift,
      );
    });
  };
  const finishWorkout = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("You must be logged in to save a workout.");
      return;
    }

    const workoutData = {
      user_id: user.id,
      name: workoutName || "Untitled Workout",
      exercises: logData,
      created_at: new Date().toISOString(),
    };

    let error;

    if (params.id) {
      // UPDATE EXISTING WORKOUT
      const response = await supabase
        .from("workouts")
        .update(workoutData)
        .eq("id", params.id);
      error = response.error;
    } else {
      // CREATE NEW WORKOUT
      const response = await supabase.from("workouts").insert([workoutData]);
      error = response.error;
    }

    if (error) {
      console.error("Error saving workout:", error);
      alert("Failed to save workout!");
    } else {
      navigate("/workouts");
    }
  };
  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-8">
      <PageHeader
        line1="workout / "
        line2="nutrition log"
        icon={<CalendarDays size={34} />}
        description="keep track of your daily workouts and nutrition"
      />

      <WorkoutLogEntry onAddSet={handleAddSet} />

      <div className="mt-4 w-full max-w-3xl">
        <h3 className="text-grey text-sm mb-1 ">today's workout</h3>
        <DataTable columns={columns} data={logData} />
      </div>

      <Input
        className=""
        id="name-of-workout"
        label="Name your work out"
        type="text"
        placeholder="ex. Monday Back Day"
        value={workoutName}
        onChange={(e) => setWorkoutName(e.target.value)}
      />
      <Button variant="outline" onClick={() => finishWorkout()}>
        Save Workout
      </Button>
    </div>
  );
};

export default WorkoutLog;
