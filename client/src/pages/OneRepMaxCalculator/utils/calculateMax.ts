/*
 * Calculate a users 1 Rep Max using Epleys formula 
 * -------------------------------
 * 1RM = Weight * (1 + Reps / 30) 
 * -------------------------------
 * 
 *
*/



const calculate = (Weight: number, Reps: number): number => {

  if (Reps < 1 || Reps > 20) {
    throw new Error("Rep input must be in the range 1-20");
  }

  const calculatedMax: number = Math.round(Weight * (1 + Reps / 30));


  return calculatedMax;

}

const calculateMax = (Weight: number, Reps: number): number => {
  return calculate(Weight, Reps);
}

export default calculateMax;



