import { useState } from "react";
import { Button } from "../../components/ui/Button.tsx";
import { Input } from "../../components/ui/Input.tsx";



const WorkoutLog = () => {
  const [weight, setWeight] = useState<string>("");
  const [reps, setReps] = useState<string>("");

  const enterLift = () => {
    console.log("entered lift");
  }

  return (

    <div className="bg-card border rounded-xl p-8 mb-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Input
          id="weight-input"
          label="Weight Lifted (lbs)"
          type="number"
          placeholder="Enter Weight"
          value={weight}
          onChange={(event) => setWeight(event.target.value)}
        />
        <Input
          id="reps-input"
          label="Reps Performed"
          type="number"
          placeholder="Enter Reps"
          min="1"
          max="20"
          value={reps}
          onChange={(event) => setReps(event.target.value)}
        />
      </div>

      <div className="flex flex-col items-center gap-4">
        <Button
          id="enterlift"
          variant="outline"
          onClick={enterLift}>
          enter lift
        </Button>
      </div>
    </div>
  )
}
export default WorkoutLog;
