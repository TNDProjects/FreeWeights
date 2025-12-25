import { useState } from "react";
import { CalendarDays } from "lucide-react";
import PageHeader from '../../components/PageHeader';
import WorkoutLogEntry from "./WorkoutLogEntry.tsx";
import { DataTable } from "../../components/ui/DataTable.tsx";
import { columns } from "./columns";
import type { WorkoutLogRow } from "./types/types.ts";

const WorkoutLog = () => {
  const [logData, setLogData] = useState<WorkoutLogRow[]>([]);

  const handleAddSet = (name: string, sets: number, reps: number, weight: number, notes: string) => {
    const newSet: WorkoutLogRow = {
      name,
      sets,
      reps,
      weight,
      notes
    };
    console.log(newSet);

    setLogData((prev) => [newSet, ...prev]);
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
        <h3 className="text-grey text-sm mb-1 ">
          today's workout
        </h3>
        <DataTable columns={columns} data={logData} />
      </div>
    </div>
  );
};

export default WorkoutLog;
