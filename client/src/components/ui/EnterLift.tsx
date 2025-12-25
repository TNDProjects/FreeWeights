import { Button } from "./Button.tsx";
import { Input } from "./Input.tsx";


interface EnterLiftProps {
  liftName: string,
  numberOfReps: number | string,
  weightLifted: number | string,
  onNameChange: (value: string) => void;
  onRepsChange: (value: string) => void;
  onWeightChange: (value: string) => void;
  buttonText: string;
  onSubmit: (event: React.FormEvent) => void;
}


export const EnterLift = ({ liftName, numberOfReps, weightLifted, onNameChange, onRepsChange, onWeightChange, buttonText, onSubmit }: EnterLiftProps) => {
  return (
    <div className="">
      <form
        className="border-2 border-dark dark:border-light rounded-lg p-8 max-w-3xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="max-w-xl mx-auto flex flex-col gap-6">
          <Input
            id="liftName-input"
            label="exercise name"
            type="text"
            placeholder="ex. deadlift"
            value={liftName}
            onChange={(e) => onNameChange(e.target.value)}
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
            id="number-of-reps"
            label="number of reps"
            type="number"
            placeholder="ex. 5"
            value={numberOfReps}
            onChange={(e) => onRepsChange(e.target.value)}
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
export default EnterLift;