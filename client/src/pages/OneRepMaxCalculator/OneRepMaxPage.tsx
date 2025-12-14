import { useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "../../components/ui/Button.tsx";
import { Input } from "../../components/ui/Input.tsx";
import Percentages from "../OneRepMaxCalculator/Percentages.tsx";
import calculateMax from "./utils/calculateMax.ts";
import { ConvertToKilograms } from "../../utils/units/units.ts"
import type { Max } from "../OneRepMaxCalculator/types/types.ts";

/* 
 * OneRepMaxPage component (subject to renaming)
 * TODO: Write unit test for OneRepMaxPage and Percentages Components 
 *
 *    weight: User enters in the amount of weight they lifted
 *    reps: User enters the amount of reps (times they lifted the weight)
 *    oneRepMax: Holds state of the users calculated one rep max 
 *
 *                              **NOTE** 
 *    We default to pounds but we will display in both lbs and kgs.
 *
*/


const maxData: Max = {
  IN_POUNDS: null,
  IN_KILOGRAMS: null,
}

const OneRepMaxPage = () => {
  const [weight, setWeight] = useState<string>("");
  const [reps, setReps] = useState<string>("");
  const [oneRepMax, setOneRepMax] = useState<Max>(maxData);

  const calculateOneRepMax = () => {

    const actualWeight = parseFloat(weight);
    const actualReps = parseInt(reps);

    const maxInPounds = calculateMax(actualWeight, actualReps);
    const maxInKG = ConvertToKilograms(maxInPounds);

    setOneRepMax({
      IN_POUNDS: maxInPounds,
      IN_KILOGRAMS: maxInKG,
    })

  }

  // Have these so it's easier to use inside our render
  const oneRepMaxInPounds = oneRepMax!.IN_POUNDS;
  const oneRepMaxInKg = oneRepMax!.IN_KILOGRAMS;

  return (
    <div className="bg-dark font-mono min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-flex justify-center items-center w-16 h-16 bg-primary-bg text-primary rounded-xl mb-4">
            <Calculator size={75} />
          </div>
          <h1 className="text-4xl font-bold mb-2 text-foreground">One Rep Max Calculator</h1>
          <p className="text-muted">
            Enter your lift details to estimate your 1RM
          </p>
        </div>
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

          <Button
            id="calculate-1rm-button"
            variant="primary"
            onClick={calculateOneRepMax}>
            Calculate {weight} x {reps}
          </Button>
        </div>

        <div className="flex flex-col gap-6 animate-in zoom-in-95 duration-300">
          <div className="bg-card border border-primary rounded-xl p-8 text-center shadow-[0_0_20px_rgba(249,115,22,0.15)]">
            <p className="text-sm text-muted mb-2">Estimated One Rep Max</p>
            <p className="text-6xl font-bold text-foreground">
              {oneRepMaxInPounds} LBS | {oneRepMaxInKg} KG
            </p>
            <p className="text-6xl font-bold text-foreground">
            </p>
          </div>
          {oneRepMaxInPounds && (
            <Percentages oneRepMax={oneRepMax}>
            </Percentages>
          )}
        </div>
      </div>
    </div>
  );
};

export default OneRepMaxPage;
