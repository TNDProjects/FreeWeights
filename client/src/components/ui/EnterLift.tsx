import { Button } from "./Button.tsx";
import { Input } from "./Input.tsx";
import { WeightInput } from "./WeightInput.tsx";


interface EnterLiftProps {
  numberOfReps: number | string,
  weightLifted: number | string,
  unitOrder: "lbs" | "kg";
  onRepsChange: (value: string) => void;
  onWeightChange: (value: string) => void;
  onUnitOrderChange: (value: "lbs" | "kg") => void;

  buttonText: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}


export const EnterLift = ({numberOfReps, weightLifted, unitOrder, onRepsChange, onWeightChange, onUnitOrderChange, buttonText, onSubmit}: EnterLiftProps) => {
  return (
    <div className="">
      <form
        className="border-2 border-dark dark:border-light rounded-xl p-8 max-w-3xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="max-w-xl mx-auto flex flex-col gap-6">
          <WeightInput
            id="weight-input"
            label="weight lifted"
            type="number"
            placeholder="ex. 225"
            value={weightLifted}
            onChange={(e) => onWeightChange(e.target.value)}
            unitOrder={unitOrder}
            onUnitOrderChange={onUnitOrderChange}
            required
            max="1500"
            min="0"
            
          />
          <Input
            id="number-of-reps"
            label="reps performed"
            type="number"
            placeholder="ex. 5"
            value={numberOfReps}
            onChange={(e) => onRepsChange(e.target.value)}
            required
            max="20"
            min="0"
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