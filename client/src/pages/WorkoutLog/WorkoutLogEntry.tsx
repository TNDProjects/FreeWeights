import { useState } from "react";
import { Button } from "../../components/ui/Button.tsx";
import { EnterLift } from "../../components/ui/EnterLift.tsx";

type LiftSet = {
  weight: number | string
  reps: number | string
  name: string
}
const testObj: LiftSet[] = [];

const normalizeLiftSet = (set: LiftSet): LiftSet => {

  // If weight or reps are already a number, just use it. If it is a string, normalize it. 
  const normalizedWeight: number = typeof set.weight === "string" ? parseInt(set.weight) : set.weight;
  const normalizedReps: number = typeof set.reps === "string" ? parseInt(set.reps) : set.reps;
  const normalizedName: string = set.name; //TODO: Add normalization for the name of the lift.

  const normalizedSet: LiftSet = {
    weight: normalizedWeight,
    reps: normalizedReps,
    name: normalizedName
  }

  return normalizedSet;
}


const enterLiftObj = async (set: LiftSet): Promise<void> => {
  try {
    const liftObj: LiftSet = normalizeLiftSet(set)
    testObj.push(liftObj)
  } catch (error) {
    console.error("Error pushing lift: ", error);
  } finally {
    console.log("Log: ", testObj)
  }

}



const WorkoutLogEntry = () => {
  const [liftName, setLiftName] = useState<string>("");
  const [weightLifted, setWeightLifted] = useState<string>("");
  const [repsCompleted, setRepsCompleted] = useState<string>("");
  const [isEnteringLift, setIsEnteringLift] = useState<boolean>(false);
  const actualLiftObj: LiftSet = {
    name: liftName,
    weight: weightLifted,
    reps: repsCompleted
  }

  const enterLift = async () => {
    if (!isEnteringLift) {
      throw new Error("isEnteringLift is not true!");
    }
    else {
      enterLiftObj(actualLiftObj)
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
        <div className="animate-entry">
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
        </div>
      )}
    </>
  )
}
export default WorkoutLogEntry;
