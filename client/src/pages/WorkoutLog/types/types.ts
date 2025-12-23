export type WorkoutLogRow = {
  name: string;
  sets: number,
  reps: number;
  weight: number;
  notes: string;
};
export type WorkoutLogSingleSet = Pick<WorkoutLogRow, "name" | "reps" | "weight">
export type WorkoutLogNoNotes = Omit<WorkoutLogRow, "notes">

export type WorkoutLogData = {
  [exerciseName: string]: WorkoutLogRow[];
};
