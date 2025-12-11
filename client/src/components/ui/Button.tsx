import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => {
  const baseStyles = "w-full py-3 px-6 text-base font-semibold rounded-lg transition-all duration-200 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary border-2 text-white border-black hover:bg-primary-hover",
    secondary: "bg-input text-foreground hover:bg-border",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className || ''}`}
      {...props}
    />
  );
};
