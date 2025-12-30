export type SingleEntry = {
  userId: string;
  id: string,
  setCount: number;
  reps: number;
  weight: number;
  notes?: string;
}
export type EnterLiftForm = {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
  notes?: string;
}

export type WorkoutLogRow = {
  userId: string;
  id: string;
  name: string;
  sets: SingleEntry[];
};
export type SavedWorkout = {
  userId: string;
  id: string;
  date: string;
  name: string;
  exercises: WorkoutLogRow[];
};

//export type WorkoutLogSingleSet = Pick<WorkoutLogRow, "name" | "reps" | "weight">
//export type WorkoutLogNoNotes = Omit<WorkoutLogRow, "notes">


