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
    header: "Sets",
    cell: ({ row }) => (
      <div className="flex flex-col gap-1 font-mono text-sm">
        {row.original.sets.map((set, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-light font-bold">{set.weight}</span>
            <span className="text-grey text-[10px]">x</span>
            <span className="text-light">{set.reps}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    header: "Notes",
    cell: ({ row }) => (
      <div className="flex flex-col gap-1 font-mono">
        {row.original.sets.map((set, index) => (
          <div key={index} className="h-[20px] flex items-center">
            <span className="text-grey italic text-xs truncate max-w-[200px]">
              {set.notes || "—"}
            </span>
          </div>
        ))}
      </div>
    ),
  },
];
