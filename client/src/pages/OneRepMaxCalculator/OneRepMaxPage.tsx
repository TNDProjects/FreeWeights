import { useState } from "react";
import { Weight } from "lucide-react";
import PageHeader from '../../components/PageHeader';
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
  const [liftName, setLiftName] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [reps, setReps] = useState<string>("");
  const [oneRepMax, setOneRepMax] = useState<Max>(maxData);
  const [isEnteringLift, setIsEnteringLift] = useState<boolean>(true);

  const calculateOneRepMax = () => {

    const actualWeight = parseFloat(weight);
    const actualReps = parseInt(reps);

    const maxInPounds = calculateMax(actualWeight, actualReps);
    const maxInKG = ConvertToKilograms(maxInPounds);

    setOneRepMax({
      IN_POUNDS: maxInPounds,
      IN_KILOGRAMS: maxInKG,
    })
    setIsEnteringLift(false);
    
  }

  // Have these so it's easier to use inside our render
  const oneRepMaxInPounds = oneRepMax!.IN_POUNDS;
  const oneRepMaxInKg = oneRepMax!.IN_KILOGRAMS;


  return (
    <div className="w-full max-w-3xl">
      <PageHeader 
        line1="one-rep max" 
        line2="calculator" 
        icon={<Weight size={36}/>} 
        description="enter your lift details to estimate your 1RM"
      />

      {isEnteringLift && (
        <EnterLift
          liftName={liftName}
          weightLifted={weight}
          numberOfReps={reps}
          onNameChange={setLiftName}
          onWeightChange={setWeight}
          onRepsChange={setReps}
          buttonText="calculate"
          onSubmit={calculateOneRepMax}
        />
      )}
      
      {oneRepMaxInPounds && (
        <div className="animate-up">
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
        </div>
      )}
    </div>
  )
};


export default OneRepMaxPage;
