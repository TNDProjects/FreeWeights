import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/Input.tsx";
import { Button } from "@/components/ui/Button.tsx";
import { CalendarDays } from "lucide-react";
import PageHeader from '../../../components/PageHeader';
import WorkoutLogEntry from "./WorkoutLogEntry.tsx";
import { DataTable } from "../../../components/ui/DataTable.tsx";
import { columns } from "./columns";
import type { WorkoutLogRow, SingleEntry, EnterLiftForm, SavedWorkout } from "../types/types.ts";


const WorkoutLog = () => {
  const [logData, setLogData] = useState<WorkoutLogRow[]>([]);
  const [workoutName, setWorkoutName] = useState<string>("");
  const navigate = useNavigate();


  const handleAddSet = (form: EnterLiftForm) => {
    const expandedSets: SingleEntry[] = Array.from({
      length: form.sets
    },
      () => ({
        id: form.id,
        setCount: form.sets,
        reps: form.reps,
        weight: form.weight,
        notes: form.notes
      })
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
        lift.name === form.name ? { ...lift, sets: [...lift.sets, ...expandedSets] } : lift);

    });
  };
  const finishWorkout = () => {
    const savedWorkout: SavedWorkout = {
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString(),
      name: workoutName,
      exercises: logData
    };
    const exisitingWorkouts = JSON.parse(localStorage.getItem("workoutHistory") || "[]");
    localStorage.setItem("workoutHistory", JSON.stringify([savedWorkout, ...exisitingWorkouts]));
    navigate('/workouts');
  }
  console.log({ logData });
  console.log("localstorage:", localStorage.getItem("workoutHistory"));


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
        <h3 className="text-grey text-sm mb-1 ">
          today's workout
        </h3>
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
      <Button
        variant="outline"
        onClick={() => finishWorkout()}>
        Save Workout
      </Button>
    </div>
  );
};

export default WorkoutLog;
