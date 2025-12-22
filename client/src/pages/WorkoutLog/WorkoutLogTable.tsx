// src/pages/WorkoutLog/LogTable.tsx
import { WorkoutLogData } from "./types";

interface LogTableProps {
  data: WorkoutLogData;
}

export const LogTable = ({ data }: LogTableProps) => {
  const exercises = Object.keys(data);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-card/50 backdrop-blur-sm">
      <table className="w-full text-left font-mono border-collapse">
        <thead>
          <tr className="border-b border-white/10 bg-white/5 text-grey uppercase text-[10px] tracking-widest">
            <th className="px-6 py-4 font-medium">Exercise</th>
            <th className="px-6 py-4 font-medium">Sets / History</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {exercises.length === 0 ? (
            <tr>
              <td colSpan={2} className="px-6 py-12 text-center text-grey italic">
                No sets recorded today.
              </td>
            </tr>
          ) : (
            exercises.map((name) => (
              <tr key={name} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 align-top">
                  <span className="text-light font-bold text-sm">{name}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {data[name].map((set, index) => (
                      <div
                        key={index}
                        className="group relative flex items-center gap-1.5 px-3 py-1 rounded-lg bg-input border border-white/5 text-xs text-light"
                      >
                        <span className="text-grey text-[9px] mr-1">{index + 1}</span>
                        <span className="font-bold">{set.weight}</span>
                        <span className="text-grey text-[10px]">x</span>
                        <span>{set.reps}</span>
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
