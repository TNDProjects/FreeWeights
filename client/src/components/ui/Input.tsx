
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, id, className, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label
          htmlFor={id}
          className="text-base font-medium text-grey tracking-wide"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={`
          h-12
          w-full
          rounded-md
          bg-[#f1f1f1]
          px-4
          text-base
          text-black
          placeholder:text-black/50
          border
          border-black/20
          outline-none
          transition-colors
          focus:border-black/50
          disabled:opacity-50
          disabled:cursor-not-allowed

          [appearance:textfield]
          [&::-webkit-inner-spin-button]:appearance-none
          [&::-webkit-outer-spin-button]:appearance-none

          ${className ?? ""}
        `}
        {...props}
      />
    </div>
  );
};

