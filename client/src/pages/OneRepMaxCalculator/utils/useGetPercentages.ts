import type { Max } from "../types/types.ts";

const percentages = [100, 95, 90, 85, 80, 75, 70, 65, 60];

const getWeightAtPercentage = (max: Max, percentage: number) => {
  if (!max) {
    throw new Error("NO MAX GIVEN");
  }
  const maxes = {
    lb: Math.round((max!.IN_POUNDS! * percentage) / 100 * 10) / 10,
    kg: Math.round((max!.IN_KILOGRAMS! * percentage) / 100 * 10) / 10,
    percentage: percentage
  }
  return maxes;
};

const useGetPercentages = (max: Max) => {
  return percentages.map((percentage) => getWeightAtPercentage(max, percentage));
}



export {
  useGetPercentages,
  getWeightAtPercentage
}

