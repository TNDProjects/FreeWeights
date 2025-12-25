import { Button } from "./Button.tsx";
import { Input } from "./Input.tsx";

interface EnterLiftInLogProps {
  liftName: string,
  numberOfSets: number | string,
  repsCompleted: number | string,
  weightLifted: number | string,
  notes: string,
  onNameChange: (value: string) => void;
  onSetsChange: (value: string) => void;
  onRepsChange: (value: string) => void;
  onWeightChange: (value: string) => void;
  onNotesChange: (value: string) => void;
  buttonText: string;
  onSubmit: (event: React.FormEvent) => void;
}


export const EnterLiftInLog = ({ liftName, numberOfSets, repsCompleted, weightLifted, notes, onNameChange, onSetsChange, onRepsChange, onNotesChange, onWeightChange, buttonText, onSubmit }: EnterLiftInLogProps) => {
  return (
    <div className="">
      <form
        className="border-2 border-dark dark:border-light rounded p-10 max-w-3xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="max-w-xl mx-auto flex flex-col gap-8">
          <Input
            id="liftName-input"
            label="exercise name"
            type="text"
            placeholder="ex. deadlift"
            value={liftName}
            onChange={(e) => onNameChange(e.target.value)}
          />
          <Input
            id="number-of-sets"
            label="number of sets"
            type="number"
            placeholder="ex. 3"
            value={numberOfSets}
            onChange={(e) => onSetsChange(e.target.value)}
          />
          <Input
            id="reps-input"
            label="reps performed"
            type="number"
            placeholder="ex. 8"
            min="1"
            max="50"
            value={repsCompleted}
            onChange={(e) => onRepsChange(e.target.value)}
          />
          <Input
            id="weight-input"
            label="weight lifted (lbs)"
            type="number"
            placeholder="ex. 225"
            value={weightLifted}
            onChange={(e) => onWeightChange(e.target.value)}
          />
          <Input
            id="notes-input"
            label="notes (optional)"
            type="text"
            placeholder="ex. RPE 7, felt pretty easy"
            value={notes}
            onChange={(e) => onNotesChange(e.target.value)}
          />
          <div className="pt-4 flex justify-center">
            <Button variant="outline" type="submit">
              {buttonText}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default EnterLiftInLog;
