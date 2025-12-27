import { ColumnDef } from "@tanstack/react-table"
import type { WorkoutLogRow } from "./types/types.ts"

export const columns: ColumnDef<WorkoutLogRow>[] = [
  {
    accessorKey: "name",
    header: "Exercise",
    cell: ({ row }) => (
      <span className="font-mono font-bold text-light uppercase">
        {row.getValue("name")}
      </span>
    ),
  },
  {
    header: "Weight",
    cell: ({ row }) => (
      <div className="flex flex-col gap-1">
        {row.original.sets.map((set, i) => (
          <div key={i} className="text-light">
            {set.weight} <span className="text-[10px] text-grey">lbs</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    header: "Reps",
    cell: ({ row }) => (
      <div className="flex flex-col gap-1 text-center">
        {row.original.sets.map((set, i) => (
          <div key={i} className="text-light">{set.reps}</div>
        ))}
      </div>
    ),
  },
  {
    header: "Notes",
    cell: ({ row }) => (
      <div className="flex flex-col gap-1 italic text-xs text-grey">
        {row.original.sets.map((set, i) => (
          <div key={i} className="truncate max-w-[150px]">
            {set.notes || "-"}
          </div>
        ))}
      </div>
    ),
  },
];
