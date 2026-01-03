import { Button } from "./Button.tsx";
import { Input } from "./Input.tsx";

interface EnterLiftInLogProps {
  liftName: string;
  numberOfSets: number | string;
  repsCompleted: number | string;
  weightLifted: number | string;
  notes: string;
  onNameChange: (value: string) => void;
  onSetsChange: (value: string) => void;
  onRepsChange: (value: string) => void;
  onWeightChange: (value: string) => void;
  onNotesChange: (value: string) => void;
  buttonText: string;
  onSubmit: (event: React.FormEvent) => void;
}

export const EnterLiftInLog = ({
  liftName,
  numberOfSets,
  repsCompleted,
  weightLifted,
  notes,
  onNameChange,
  onSetsChange,
  onRepsChange,
  onNotesChange,
  onWeightChange,
  buttonText,
  onSubmit,
}: EnterLiftInLogProps) => {
  return (
    <div>
      <form
        className="border-2 border-dark rounded-lg dark:border-light p-4 max-w-lg mx-auto"
        onSubmit={onSubmit}
      >
        <div className="max-w-md mx-auto flex flex-col gap-4">
          <Input
            className="w-full"
            id="liftName-input"
            label="exercise name"
            type="text"
            placeholder="ex. deadlift"
            value={liftName}
            onChange={(e) => onNameChange(e.target.value)}
          />
          <div className="grid grid-cols-3 gap-8">
            <Input
              className=""
              id="number-of-sets"
              label="sets"
              type="number"
              placeholder="ex. 3"
              value={numberOfSets}
              onChange={(e) => onSetsChange(e.target.value)}
            />
            <Input
              className=""
              id="reps-input"
              label="reps"
              type="number"
              placeholder="ex. 8"
              min="1"
              max="50"
              value={repsCompleted}
              onChange={(e) => onRepsChange(e.target.value)}
            />
            <Input
              className=""
              id="weight-input"
              label="weight"
              type="number"
              placeholder="ex. 225"
              value={weightLifted}
              onChange={(e) => onWeightChange(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="notes-input"
              className="text-gray-400 font-mono text-sm"
            >
              notes (optional)
            </label>
            <textarea
              id="notes-input"
              className="w-full h-32 p-4 rounded-md  text-gray-400 font-mono border resize-none"
              placeholder="ex. RPE 7, felt pretty easy"
              value={notes}
              onChange={(e) => onNotesChange(e.target.value)}
            />
          </div>
          <div className="pt-4 flex justify-center">
            <Button variant="outline" type="submit">
              {buttonText}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EnterLiftInLog;
