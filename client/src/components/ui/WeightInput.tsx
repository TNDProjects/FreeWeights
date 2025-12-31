import React from "react";

interface WeightInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  weightUnit: "lbs" | "kg";
  onWeightUnitChange: (value: "lbs" | "kg") => void;
}

export const WeightInput = ({ label, id, className, weightUnit, onWeightUnitChange, ...props }: WeightInputProps) => {
  return (
    <div className="flex flex-col text-gray-400 gap-1">
        {label && (
            <label
                htmlFor={id}
                className="text-sm tracking-tight"
            >
            {label}
            </label>
        )}
        <div className="flex gap-1">
            <input
                id={id}
                className={`
                rounded
                w-full 
                h-10 
                px-2
                text-black
                border-2
                border-dark dark:border-light
                [appearance:textfield]

                ${className ?? ""}
                `}
                {...props}
            />
            <select 
              value={weightUnit}
              onChange={(e) => onWeightUnitChange(e.target.value as "lbs" | "kg")} 
              className="text-black h-10 px-2 rounded border-2 border-dark dark:border-light" 
            >
                <option value="lbs">lbs</option>
                <option value="kg">kg</option>
            </select>
        </div>
    </div>
  );
};

