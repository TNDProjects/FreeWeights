import type { Max } from "../OneRepMaxCalculator/types/types.ts";
import { useGetPercentages } from "./utils/useGetPercentages.ts";

export const Percentages = ({ oneRepMax }: { oneRepMax: Max }) => {
  const percentagesFormatted = useGetPercentages(oneRepMax);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden mt-8">
      <div className="p-4 px-6 border-b border-border bg-white/5">
        <h3 className="font-semibold text-foreground">Percentage Breakdown</h3>
      </div>
      <div className="divide-y divide-border">
        {percentagesFormatted.map((row) => (
          <div
            key={row.percentage}
            className="flex justify-between px-6 py-4 hover:bg-input transition-colors items-center"
          >
            <span className="text-muted font-mono">{row.percentage}%</span>
            <div className="text-right">
              <span className="font-bold text-foreground">
                {row.lb} <span className="text-sm text-muted-foreground font-normal mr-2">lbs</span>
              </span>
              <span className="text-border mx-1">/</span>
              <span className="font-medium text-muted-foreground">
                {row.kg} <span className="text-sm font-normal">kg</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Percentages; 
