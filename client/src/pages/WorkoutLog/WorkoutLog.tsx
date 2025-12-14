import { useState } from "react";
import { Button } from "../../components/ui/Button.tsx";
import { Input } from "../../components/ui/Input.tsx";



const WorkoutLog = () => {
  const [liftWeight, setLiftWeight] = useState<string>("");
  const [liftReps, setLiftReps] = useState<string>("");

  const enterLift = () => {
    console.log("entered lift");
  }

  return (
    <div className="bg-dark font-mono min-h-screen pt-24 pb-16 ">

      <div className="bg-card border rounded-2xl p-10 max-w-4xl mx-auto">
        <div className="max-w-xl mx-auto flex flex-col gap-8">
          <Input
            id="weight-input"
            label="weight lifted (lbs)"
            type="number"
            placeholder="ex. 225"
            value={liftWeight}
            onChange={(e) => setLiftWeight(e.target.value)}
          />

          <Input
            id="reps-input"
            label="reps performed (1 – 20)"
            type="number"
            placeholder="ex. 8"
            min="1"
            max="20"
            value={liftReps}
            onChange={(e) => setLiftReps(e.target.value)}
          />

          <div className="pt-4 flex justify-center">
            <Button variant="outline" onClick={enterLift}>
              calculate
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default WorkoutLog;
