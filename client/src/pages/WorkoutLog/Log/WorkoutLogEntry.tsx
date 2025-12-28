import { useState } from "react";
import { Button } from "../../../components/ui/Button.tsx";
import { EnterLiftInLog } from "../../../components/ui/EnterLiftInLog.tsx";
import type { EnterLiftForm } from "../types/types.ts";

interface WorkoutLogEntryProps {
  onAddSet: (form: EnterLiftForm) => void;
}

const WorkoutLogEntry = ({ onAddSet }: WorkoutLogEntryProps) => {
  const [liftName, setLiftName] = useState<string>("");
  const [numberOfSets, setNumberOfSets] = useState<string>("");
  const [repsCompleted, setRepsCompleted] = useState<string>("");
  const [weightLifted, setWeightLifted] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [isEnteringLift, setIsEnteringLift] = useState<boolean>(false);

  const enterLift = () => {
    if (!liftName || !weightLifted || !repsCompleted) return;

    onAddSet({
      id: crypto.randomUUID(),
      name: liftName,
      sets: parseInt(numberOfSets),
      reps: parseInt(repsCompleted),
      weight: parseInt(weightLifted),
      notes: notes,
    });

    setWeightLifted("");
    setRepsCompleted(""); setNumberOfSets("");
    setNotes("");
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
        <div className="animate-up">
          <EnterLiftInLog
            liftName={liftName}
            numberOfSets={numberOfSets}
            repsCompleted={repsCompleted}
            weightLifted={weightLifted}
            notes={notes}
            onNameChange={setLiftName}
            onSetsChange={setNumberOfSets}
            onRepsChange={setRepsCompleted}
            onWeightChange={setWeightLifted}
            onNotesChange={setNotes}
            buttonText="enter lift"
            onSubmit={enterLift}
          />
        </div>
      )}
    </>
  );
};

export default WorkoutLogEntry;
