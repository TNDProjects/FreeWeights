import { ColumnDef } from "@tanstack/react-table"
import type { WorkoutLogRow } from "./types/types.ts"

export const columns: ColumnDef<WorkoutLogRow>[] = [
  {
    accessorKey: "name",
    header: "Exercise",
    cell: ({ row }) => (
      <span className="font-mono font-bold text-gray-400 uppercase">
        {row.getValue("name")}
      </span>
    ),
  },
  {
    header: "Sets",
    cell: ({ row }) => {
      // 1. Logs must be inside a block body before the return statement
      console.log("Row Original:", row.original);
      console.log("Sets Array:", row.original.sets);

      return (
        <div className="flex flex-col gap-1 text-gray-400 font-mono text-sm">
          {row.original.sets.map((set, index) => (
            set.setCount < 2 ? (
              <div key={index} className="flex items-center text-gray-400 gap-2">
                <span className="font-bold">
                  {set.reps} <span className="text-[10px]">@</span> {set.weight} lbs
                </span>
              </div>
            ) : (
              <div key={index} className="flex items-center text-gray-400 gap-2">
                <span className="font-bold text-gray-400">{set.setCount}</span>
                <span className="text-[10px] text-gray-400">x</span>
                <span className="text-gray-400">{set.reps}</span>
                <span className="text-[10px] text-gray-400">@</span>
                <span className="text-gray-400">{set.weight} lbs </span>
              </div>
            )
          ))}
        </div>
      );
    },
  },
  {
    header: "Notes",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-1 font-mono">
          {row.original.sets.map((set, index) => {
            const isDuplicate = index > 0 && set.notes === row.original.sets[index - 1].notes;
            return (
              <div key={index} className="h-[20px] flex items-center">
                {!isDuplicate && set.notes ? (
                  <span className="text-gray-400 italic text-xs truncate max-w-[200px]">
                    {set.notes}
                  </span>
                ) : (
                  <span className="opacity-0">—</span>
                )}
              </div>
            );
          })}
        </div>
      );
    },
  }
];
