import { ColumnDef } from "@tanstack/react-table"
import type { WorkoutLogRow } from "./types/types.ts"

export const columns: ColumnDef<WorkoutLogRow>[] = [
  {
    accessorKey: "name",
    header: "Exercise",
    cell: ({ row }) => <span className="font-mono">{row.getValue("name")}</span>,
  },
  {
    header: "Sets",
    cell: ({ row }) => {
      console.log("Row Data:", row.original); // Check if 'notes' exists in this object
      return (
        <div className="flex flex-col gap-1 font-mono">
          {row.original.sets.map((set, index) => (
            <div key={index}>
              {set.weight} x {set.reps}
              {set.notes && <span className="text-grey ml-2">({set.notes})</span>}
            </div>
          ))}
        </div>
      );
    }
  }]
