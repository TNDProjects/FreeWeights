import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, id, className, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-muted">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full p-3 bg-input border text-black rounded-lg outline-none focus:border-primary transition-colors ${className || ''}`}
        {...props}
      />
    </div>
  );
};
