const percentages = [100, 95, 90, 85, 80, 75, 70, 65, 60];

const getWeightAtPercentage = (max: number, percentage: number) => {
  if (!max) {
    throw new Error("NO MAX GIVEN");

  }
  const maxes = {
    lb: Math.round((oneRepMax!.IN_POUNDS! * percentage) / 100 * 10) / 10,
    kg: Math.round((oneRepMax!.IN_KILOGRAMS! * percentage) / 100 * 10) / 10
  }

  return maxes;
};


