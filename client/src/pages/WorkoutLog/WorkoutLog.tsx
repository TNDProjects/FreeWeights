import { useState } from "react";
import { EnterLift } from "../../components/ui/EnterLift.tsx";

const testObj = [];

const WorkoutLog = () => {
  const [weightLifted, setWeightLifted] = useState<string>("");
  const [repsCompleted, setRepsCompleted] = useState<string>("");



  const enterLift = () => {
    const normalizeNumbers = (weight: string, reps: string) => {
      const newWeight: number = parseInt(weight);
      const newReps: number = parseInt(reps);
      return { newWeight, newReps }

    }
    const liftObj = normalizeNumbers(weightLifted, repsCompleted)

    testObj.push(liftObj)
    console.log(testObj);
  }

  return (
    <EnterLift
      weightLifted={weightLifted}
      repsCompleted={repsCompleted}
      onWeightChange={setWeightLifted}
      onRepsChange={setRepsCompleted}
      buttonText="enter lift"
      onSubmit={enterLift}
    >
    </EnterLift>
  )
}
export default WorkoutLog;
