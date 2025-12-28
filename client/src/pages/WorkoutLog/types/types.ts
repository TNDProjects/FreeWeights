export type SingleSet = {
  reps: number;
  weight: number;
  notes?: string;
}
export type EnterLiftForm = {
  name: string;
  sets: number;
  reps: number;
  weight: number;
  notes?: string;
}

export type WorkoutLogRow = {
  name: string;
  sets: SingleSet[];
};
export type WorkoutLogData = {
  date: string;
  exercises: WorkoutLogRow[];
};

//export type WorkoutLogSingleSet = Pick<WorkoutLogRow, "name" | "reps" | "weight">
//export type WorkoutLogNoNotes = Omit<WorkoutLogRow, "notes">


