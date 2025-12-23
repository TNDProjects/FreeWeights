import { ColumnDef } from "@tanstack/react-table"
import type { WorkoutLogRow } from "./types/types.ts"

export const columns: ColumnDef<WorkoutLogRow>[] = [
  {
    accessorKey: "name",
    header: "Exercise",
    cell: ({ row }) => <span className="font-mono">{row.getValue("name")}</span>,
  },
  {
    accessorKey: "sets",
    header: "Sets",
    cell: ({ row }) => <span className="font-mono">{row.getValue("sets")}</span>,
  },
  {
    accessorKey: "reps",
    header: "Reps",
    cell: ({ row }) => <div className="font-mono">{row.getValue("reps")}</div>,
  },
  {
    accessorKey: "weight",
    header: "Weight (lbs)",
    cell: ({ row }) => <div className="font-mono">{row.getValue("weight")} lbs</div>,
  },
  {
    accessorKey: "notes",
    header: "notes",
    cell: ({ row }) => <div className="font-mono">{row.getValue("notes")}</div>,
  },
]
