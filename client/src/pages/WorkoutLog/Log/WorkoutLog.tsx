import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const params = useParams();

  // If we see that the params.id (from the url) matches an id inside our localstorage, load that workout. 
  useEffect(() => {
    const exisitingWorkouts = localStorage.getItem("workoutHistory");
    if (exisitingWorkouts && params.id) {
      const parsedExistingWorkouts = JSON.parse(exisitingWorkouts!) as SavedWorkout[];
      const workoutToEdit = parsedExistingWorkouts.find((workout) => workout.id === params.id);

      if (workoutToEdit) {
        setLogData(workoutToEdit.exercises);
        setWorkoutName(workoutToEdit.name);
      }
    }

  }, [params.id]);


  const handleAddSet = (form: EnterLiftForm) => {
    const expandedSets: SingleEntry[] = Array.from({
      length: form.sets
    },
      () => ({
        userId: form.id,
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

    // if we have a params.id we know to just save it to this current workout 
    const currentWorkoutId = params.id ? params.id : crypto.randomUUID();
    console.log(currentWorkoutId);

    const savedWorkout: SavedWorkout = {
      userId: currentWorkoutId,
      id: currentWorkoutId,
      date: new Date().toLocaleDateString(),
      name: workoutName,
      exercises: logData
    };

    const historyString = localStorage.getItem("workoutHistory");
    const history = historyString ? JSON.parse(historyString) : []
    let updatedWorkoutLog;

    if (params.id) {
      updatedWorkoutLog = history.map((workout: SavedWorkout) => {
        if (workout.id === currentWorkoutId) {
          return savedWorkout;
        }
        return workout;

      });
    } else {
      updatedWorkoutLog = [savedWorkout, ...history]
    }

    localStorage.setItem("workoutHistory", JSON.stringify(updatedWorkoutLog));
    navigate('/workouts');
  }


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
