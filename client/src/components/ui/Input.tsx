
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, id, className, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          htmlFor={id}
          className="text-sm text-mono tracking-tight"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={`
          h-10
          w-full
          rounded
          px-4
          text-black
          border-2
          border-dark dark:border-light
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

