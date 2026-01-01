import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, id, className, ...props }: InputProps) => {
  return (
    <div className="flex text-gray-300 flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm tracking-tight">
          {label}
        </label>
      )}

      <input
        id={id}
        className={`
        text-gray-300
         rounded-md 
          h-10 
          px-2
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
