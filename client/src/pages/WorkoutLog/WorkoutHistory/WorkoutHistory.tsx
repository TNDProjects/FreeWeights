import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { DataTable } from '@/components/ui/DataTable';
import { historyColumns } from './historyColumns';
import type { SavedWorkout } from '../types/types';

const WorkoutHistory = () => {
  const [history, setHistory] = useState<SavedWorkout[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("workoutHistory");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-6 pt-12">
      <div className="flex justify-between items-center px-2">
        <h2 className="text-xl text-light uppercase font-bold tracking-tight">
          Past Workouts
        </h2>
        <Link to="/log">
          <Button variant="outline">+ New Workout</Button>
        </Link>
      </div>

      <div className="w-full">
        <DataTable columns={historyColumns} data={history} />
      </div>
    </div>
  );
};

export default WorkoutHistory;
