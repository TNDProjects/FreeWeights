import { useState } from "react";
import { Weight } from "lucide-react";
import PageHeader from '../../components/PageHeader';
import { EnterLift } from "../../components/ui/EnterLift.tsx";
import Percentages from "../OneRepMaxCalculator/Percentages.tsx";
import calculateMax from "./utils/calculateMax.ts";
import { ConvertToKilograms } from "../../utils/units/units.ts"
import type { Max } from "../OneRepMaxCalculator/types/types.ts";
import type { UnitOrder } from "../OneRepMaxCalculator/types/types.ts";


const maxData: Max = {
  IN_POUNDS: null,
  IN_KILOGRAMS: null,
}


const OneRepMaxPage = () => {
  const [weight, setWeight] = useState<string>("");
  const [reps, setReps] = useState<string>("");
  const [unitOrderDraft, setUnitOrderDraft] = useState<UnitOrder>("lbs");
  const [unitOrderCommitted, setUnitOrderCommitted] = useState<UnitOrder>("lbs");
  const [oneRepMax, setOneRepMax] = useState<Max>(maxData);

  const calculateOneRepMax = () => {
    
    const actualWeight = parseFloat(weight);
    const actualReps = parseInt(reps);
    
    if (isNaN(actualWeight) || isNaN(actualReps)) return;

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

  //calculate button
  const displayOneRepMax = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calculateOneRepMax();
    setUnitOrderCommitted(unitOrderDraft);
  };


  return (
    <div className="w-full max-w-3xl">
      <PageHeader 
        line1="one-rep max" 
        line2="calculator" 
        icon={<Weight size={34}/>} 
        description="enter your lift details to estimate your 1RM"
      />

      <EnterLift
        weightLifted={weight}
        numberOfReps={reps}
        onWeightChange={setWeight}
        onRepsChange={setReps}
        unitOrder={unitOrderDraft}
        onUnitOrderChange={setUnitOrderDraft}
        buttonText="calculate"
        onSubmit={displayOneRepMax}
      />
 
      {oneRepMaxInPounds && (
        <div className="animate-up pt-12">
          <div className="border-2 border-dark dark:border-light rounded-xl flex flex-col">
            <div className="rounded-sm p-6 text-center">
              <p className="text-sm md:text-lg pb-4 text-lightgrey tracking-tighter">
                your estimated one-rep max is:
              </p>
              <p className="text-4xl md:text-5xl lg:text-6xl ">
                {unitOrderCommitted === "lbs" ? (
                  <>
                    <span className="font-bold">{oneRepMaxInPounds}<span className="font-normal text-2xl">lbs</span> </span>
                    <span className="text-grey">/{" "}{oneRepMaxInKg}<span className="font-normal text-2xl">kg</span></span>
                  </>
                ) : (
                  <>
                    <span className="font-bold">{oneRepMaxInKg}kg </span>
                    <span className="text-grey">/{" "}{oneRepMaxInPounds}lbs</span>
                  </>
                )}
              </p>
            </div>
            <Percentages oneRepMax={oneRepMax} />
          </div>
        </div>
      )}

      <div>
        <div className="py-12 flex flex-col gap-2">
          <h1 className="text-lg tracking-tighter"><i>what is a one-rep max?</i></h1>
          <p className="text-grey text-sm leading-6 tracking-tighter">
            an individual's one-rep max is the maximum amount of weight that they can lift for a single repetition of a given exercise.
            it is also preferred that they perform the lift with good form and a full range of motion.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg tracking-tighter"><i>how to calculate?</i></h1>
          <p className="text-grey text-sm leading-6 tracking-tighter">
            for the most accurate estimate, enter your information above using a lift performed between <b>1 and 10</b> repetitions.
            after pressing the 'calculate' button, you will see your one-rep max estimate with a table of percentages below it.
          </p>
          <p className="mt-2 pb-12 text-grey text-sm leading-6 tracking-tighter">
            the percentage table shows the corresponding weights at various percentages of an individual’s one-rep max. 
            these values can be used to guide training intensity — for example, <b>50–60%</b> is commonly used for warm-ups, <b>70–80%</b> for hypertrophy (muscle growth), 
            and <b>80–90%</b> for strength development.
          </p>
        </div>
      </div>
    </div>
  )
};


export default OneRepMaxPage;
