import { ColumnDef } from "@tanstack/react-table";
import ActionCell from "./ActionCell";
import type { SavedWorkout } from "../types/types";

export const historyColumns: ColumnDef<SavedWorkout>[] = [
  {
    accessorKey: "name",
    header: "Workout Name",
    cell: ({ row }) => (
      <span className="font-mono font-bold text-gray-400">
        {row.original.name || "Untitled Workout"}
      </span>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <span className="font-mono text-xs uppercase tracking-tighter">
        {row.original.date}
      </span>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => <ActionCell id={row.original.id} />
  },
];
