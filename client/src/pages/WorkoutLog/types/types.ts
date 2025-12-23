export type LiftSet = {
  name: string;
  weight: number;
  reps: number;
};

export type WorkoutLogData = {
  [exerciseName: string]: LiftSet[];
};
