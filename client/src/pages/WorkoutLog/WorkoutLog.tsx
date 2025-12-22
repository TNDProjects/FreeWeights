import { useState } from "react";
import { CalendarDays } from "lucide-react";
import PageHeader from '../../components/PageHeader';
import WorkoutLogEntry from "./WorkoutLogEntry.tsx";
import { WorkoutLogTable } from "./WorkoutLogTable.tsx";
import type { WorkoutLogData } from "./types/types.ts";

const WorkoutLog = () => {
  const [logData, setLogData] = useState<WorkoutLogData>({});

  const handleAddSet = (name: string, weight: number, reps: number) => {
    setLogData((prev) => {
      const existingSets = prev[name] || [];
      return {
        ...prev,
        [name]: [...existingSets, { weight, reps }],
      };
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 flex flex-col gap-8">
      <PageHeader
        line1="workout / "
        line2="nutrition log"
        icon={<CalendarDays size={36} />}
        description="keep track of your daily workouts and nutrition"
      />

      <WorkoutLogEntry onAddSet={handleAddSet} />

      <div className="mt-4">
        <h3 className="font-mono text-grey text-xs uppercase tracking-widest mb-4 px-1">
          Today's Training
        </h3>
        <WorkoutLogTable data={logData} />
      </div>
    </div>
  );
};

export default WorkoutLog;
