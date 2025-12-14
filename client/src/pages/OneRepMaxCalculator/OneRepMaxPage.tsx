import { useState } from "react";
import { Calculator } from "lucide-react";
import { EnterLift } from "../../components/ui/EnterLift.tsx";
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
    <div className="bg-dark font-mono min-h-screen pt-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex justify-center items-center">
            <Calculator size={50} />
          </div>
          <h1 className="text-4xl font-bold text-light">
            one-rep max calculator
          </h1>
          <p className="text-grey">
            Enter your lift details to estimate your 1RM
          </p>
        </div>

        <EnterLift
          weightLifted={weight}
          repsCompleted={reps}
          onWeightChange={setWeight}
          onRepsChange={setReps}
          buttonText="calculate"
          onSubmit={calculateOneRepMax}
        />

        {oneRepMaxInPounds && (
          <div className="flex flex-col gap-8 pt-8">
            <div className="border border-primary rounded-xl p-8 text-center">
              <p className="text-mono text-light pb-4">
                your estimated one rep max is:
              </p>
              <p className="text-6xl text-mono text-light">
                {oneRepMaxInPounds} LBS | {oneRepMaxInKg} KG
              </p>
            </div>

            <Percentages oneRepMax={oneRepMax} />
          </div>
        )}
      </div>
    </div>
  )
};


export default OneRepMaxPage;
