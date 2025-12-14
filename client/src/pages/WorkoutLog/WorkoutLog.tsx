import { useState } from "react";
import { EnterLift } from "../../components/ui/EnterLift.tsx";



const WorkoutLog = () => {
  const [weightLifted, setWeightLifted] = useState<string>("");
  const [repsCompleted, setRepsCompleted] = useState<string>("");

  const enterLift = () => {
    console.log("entered lift");
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
