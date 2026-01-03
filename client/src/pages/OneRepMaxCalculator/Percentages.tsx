import type { Max } from "../OneRepMaxCalculator/types/types.ts";
import { useGetPercentages } from "./utils/useGetPercentages.ts";

export const Percentages = ({ oneRepMax }: { oneRepMax: Max }) => {
  const percentagesFormatted = useGetPercentages(oneRepMax);

  return (
    <div className="border-t border-dark dark:border-light">
      <div className="divide-y divide-border">
        {percentagesFormatted.map((row) => (
          <div
            key={row.percentage}
            className="flex justify-between px-6 py-4 hover:bg-input transition-colors items-center"
          >
            <span className="">{row.percentage}%</span>
            <div className="">
              <span className="">
                {row.lb}lbs
              </span>
              <span className="text-grey"> / </span>
              <span className="text-lightgrey">
                {row.kg}kg
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Percentages; 
