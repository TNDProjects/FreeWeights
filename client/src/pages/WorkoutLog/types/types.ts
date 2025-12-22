export type LiftSet = {
  weight: number;
  reps: number;
};

export type WorkoutLogData = {
  [exerciseName: string]: LiftSet[];
};
