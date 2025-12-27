import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "ghost";
}

export const Button = ({
  variant = "outline",
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-2 text-sm rounded  focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    outline:
      "border-2 border-dark dark:border-light hover:bg-white/5",
    ghost:
      "text-muted hover:text-white hover:bg-white/5",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className ?? ""}`}
      {...props}
    />
  );
};

