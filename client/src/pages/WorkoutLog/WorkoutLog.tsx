import { useState } from "react";
import { Button } from "../../components/ui/Button.tsx";
import { EnterLift } from "../../components/ui/EnterLift.tsx";

const testObj = [];

const WorkoutLog = () => {
  const [weightLifted, setWeightLifted] = useState<string>("");
  const [repsCompleted, setRepsCompleted] = useState<string>("");
  const [isEnteringLift, setIsEnteringLift] = useState<boolean>(false);
  // const showModal = () => {
  //   setIsEnteringLift(true);
  // }

  const enterLift = () => {
    if (!isEnteringLift) {
      throw new Error("isEnteringLift is not true!");
    }
    else {
      const normalizeNumbers = (weight: string, reps: string) => {
        const newWeight: number = parseInt(weight);
        const newReps: number = parseInt(reps);
        return { newWeight, newReps }
      }
      const liftObj = normalizeNumbers(weightLifted, repsCompleted)
      testObj.push(liftObj)
    }
  }

  return (
    <div className="font-mono">

      <div className="pt-4 flex justify-center">
        <Button variant="outline" onClick={() => {
          setIsEnteringLift(true)
        }}>
          Add Set
        </Button>
      </div>

      {isEnteringLift && (
        <EnterLift
          weightLifted={weightLifted}
          repsCompleted={repsCompleted}
          onWeightChange={setWeightLifted}
          onRepsChange={setRepsCompleted}
          buttonText="enter lift"
          onSubmit={enterLift}
        >
        </EnterLift>
      )}
    </div>
  )
}

export default WorkoutLog;
