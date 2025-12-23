export type WorkoutLogRow = {
  name: string;
  sets: number,
  reps: number;
  weight: number;
  notes: string;
};

export type WorkoutLogData = {
  [exerciseName: string]: WorkoutLogRow[];
};
