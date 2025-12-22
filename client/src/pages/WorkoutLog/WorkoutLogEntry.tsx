import { useState } from "react";
import { Button } from "../../components/ui/Button.tsx";
import { EnterLift } from "../../components/ui/EnterLift.tsx";

interface WorkoutLogEntryProps {
  onAddSet: (name: string, weight: number, reps: number) => void;
}

const WorkoutLogEntry = ({ onAddSet }: WorkoutLogEntryProps) => {
  const [liftName, setLiftName] = useState<string>("");
  const [weightLifted, setWeightLifted] = useState<string>("");
  const [repsCompleted, setRepsCompleted] = useState<string>("");
  const [isEnteringLift, setIsEnteringLift] = useState<boolean>(false);

  const enterLift = () => {
    if (!liftName || !weightLifted || !repsCompleted) return;

    onAddSet(
      liftName,
      parseInt(weightLifted),
      parseInt(repsCompleted)
    );

    setWeightLifted("");
    setRepsCompleted("");
    setIsEnteringLift(false);
  };

  return (
    <>
      <div className="pt-4 flex justify-center">
        {!isEnteringLift ? (
          <Button variant="outline" onClick={() => setIsEnteringLift(true)}>
            Add Set
          </Button>
        ) : (
          <Button variant="outline" onClick={() => setIsEnteringLift(false)}>
            Cancel
          </Button>
        )}
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
          />
        </div>
      )}
    </>
  );
};

export default WorkoutLogEntry;
