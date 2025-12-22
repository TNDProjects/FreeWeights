import type { WorkoutLogData } from "./types/types.ts";

interface LogTableProps {
  data: WorkoutLogData;
}

export const WorkoutLogTable = ({ data }: LogTableProps) => {
  const exercises = Object.keys(data);

  return (
    <div className="w-full overflow-hidden rounded-xl border border-border bg-card">
      <table className="w-full text-left font-mono">
        <thead className="bg-white/5 border-b border-border">
          <tr className="text-grey uppercase text-[10px] tracking-widest">
            <th className="px-6 py-4 font-medium text-left">Exercise</th>
            <th className="px-6 py-4 font-medium text-left">Sets History</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {exercises.length === 0 ? (
            <tr>
              <td colSpan={2} className="px-6 py-10 text-center text-grey italic">
                No sets recorded yet.
              </td>
            </tr>
          ) : (
            exercises.map((name) => (
              <tr key={name} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-6 py-4 align-top font-bold text-light min-w-[140px]">
                  {name}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {data[name].map((set, idx) => (
                      <div
                        key={idx}
                        className="bg-input border border-border px-3 py-1 rounded-md text-xs text-light flex items-center gap-1"
                      >
                        <span className="text-grey text-[10px] uppercase">S{idx + 1}</span>
                        <span className="font-bold ml-1">{set.weight}</span>
                        <span className="text-grey">x</span>
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
