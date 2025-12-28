import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, id, className, ...props }: InputProps) => {
  return (
    <div className="flex text-gray-400 flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm tracking-tight"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={`
          rounded
          h-10 
          px-2
          text-black
          border-2
          border-dark dark:border-light
          focus:border-black/50
          disabled:opacity-50
          disabled:cursor-not-allowed
          [appearance:textfield]

          ${className ?? ""}
        `}
        {...props}
      />
    </div>
  );
};

