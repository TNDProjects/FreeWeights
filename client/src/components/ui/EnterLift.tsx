import { Button } from "../../components/ui/Button.tsx";
import { Input } from "../../components/ui/Input.tsx";

interface EnterLiftProps {
  weightLifted: number | string,
  repsCompleted: number | string,
  onWeightChange: (value: string) => void;
  onRepsChange: (value: string) => void;
  buttonText: string;
  onSubmit: () => void;
}


export const EnterLift = ({ weightLifted, repsCompleted, onWeightChange, onRepsChange, buttonText, onSubmit }: EnterLiftProps) => {
  return (
    <div className="bg-dark font-mono min-h-screen pt-24 pb-16 ">
      <div className="bg-card border rounded-2xl p-10 max-w-4xl mx-auto">
        <div className="max-w-xl mx-auto flex flex-col gap-8">
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
            <Button variant="outline" onClick={onSubmit}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EnterLift;
