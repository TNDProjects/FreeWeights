import { useState } from "react";
import { Button } from "../../components/ui/Button.tsx";
import { EnterLift } from "../../components/ui/EnterLift.tsx";

type LiftSet = {
  weight: number | null
  reps: number | null
  name: string | null
}
const testObj: LiftSet[] = [];

const normalizeLiftSet = (weight: string, reps: string): LiftSet => {

  const normalizedWeight: number = parseInt(weight);
  const normalizedReps: number = parseInt(reps);
  //TODO: Add noramlization for the name of the lift

  const normalizedSet: LiftSet = {
    weight: normalizedWeight,
    reps: normalizedReps,
    name: "test"
  }

  return normalizedSet;
}

const enterLiftObj = async (weight: string, reps: string): Promise<void> => {
  try {
    const liftObj: LiftSet = normalizeLiftSet(weight, reps)
    testObj.push(liftObj)
  } catch (error) {
    console.error("Error pushing lift: ", error);
  } finally {
    console.log("Log: ", testObj)
  }
}

const WorkoutLog = () => {
  const [liftName, setLiftName] = useState<string>("");
  const [weightLifted, setWeightLifted] = useState<string>("");
  const [repsCompleted, setRepsCompleted] = useState<string>("");
  const [isEnteringLift, setIsEnteringLift] = useState<boolean>(false);

  const enterLift = async () => {
    if (!isEnteringLift) {
      throw new Error("isEnteringLift is not true!");
    }
    else {
      enterLiftObj(weightLifted, repsCompleted)
      setIsEnteringLift(false);
    }
  }

  return (
    <>
      <div className="pt-4 flex justify-center">
        <Button variant="outline" onClick={() => {
          setIsEnteringLift(true)
        }}>
          Add Set
        </Button>
      </div>

      {isEnteringLift && (
        <EnterLift
          liftName={liftName}
          weightLifted={weightLifted}
          repsCompleted={repsCompleted}
          onNameChange={setLiftName}
          onWeightChange={setWeightLifted}
          onRepsChange={setRepsCompleted}
          buttonText="enter lift"
          onSubmit={enterLift}
        >
        </EnterLift>
      )}
    </>
  )
}

export default WorkoutLog;
