import { ColumnDef } from "@tanstack/react-table"
import type { LiftSet } from "./types/types.ts"

export const columns: ColumnDef<LiftSet>[] = [
  {
    accessorKey: "name",
    header: "Exercise",
    cell: ({ row }) => <span className="font-bold text-light">{row.getValue("name")}</span>,
  },
  {
    accessorKey: "weight",
    header: "Weight (lbs)",
    cell: ({ row }) => <div className="font-mono">{row.getValue("weight")} lbs</div>,
  },
  {
    accessorKey: "reps",
    header: "Reps",
    cell: ({ row }) => <div className="font-mono">{row.getValue("reps")}</div>,
  },
]
