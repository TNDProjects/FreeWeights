import { Button } from "../../components/ui/Button.tsx";
import { Input } from "../../components/ui/Input.tsx";

interface EnterLiftProps {
  liftName: string,
  weightLifted: number | string,
  repsCompleted: number | string,
  onNameChange: (value: string) => void;
  onWeightChange: (value: string) => void;
  onRepsChange: (value: string) => void;
  buttonText: string;
  onSubmit: (event: React.FormEvent) => void;
}


export const EnterLift = ({ liftName, weightLifted, repsCompleted, onNameChange, onWeightChange, onRepsChange, buttonText, onSubmit }: EnterLiftProps) => {
  return (
    <div className="">
      <form
        className="bg-card border rounded-2xl p-10 max-w-3xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="max-w-xl mx-auto flex flex-col gap-8">
          <Input
            id="liftName-input"
            label="exercise name"
            type="text"
            placeholder="ex. Deadlift"
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
            id="reps-input"
            label="reps performed"
            type="number"
            placeholder="ex. 8"
            min="1"
            max="50"
            value={repsCompleted}
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
