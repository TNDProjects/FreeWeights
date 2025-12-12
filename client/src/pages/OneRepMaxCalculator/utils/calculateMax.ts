/*
 * Calculate a users 1 Rep Max using Epleys formula 
 * -------------------------------
 * 1RM = Weight * (1 + Reps / 30) 
 * ------------------------------- 
*/


const calculate = (weight: number, reps: number): number => {
  if (reps < 1 || reps > 20) {
    throw new Error("Rep input must be in the range 1-20");
  }
  const calculatedMax: number = Math.round(weight * (1 + reps / 30));
  return calculatedMax;
}

const calculateMax = (weight: number, reps: number): number => {
  return calculate(weight, reps);
}

export default calculateMax;



