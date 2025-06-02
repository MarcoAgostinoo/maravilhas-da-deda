import React from "react";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className = "",
  variant = "primary",
  children,
}) => {
  const baseStyles =
    "rounded-full px-6 text-lg py-2 text-white transition-colors duration-300";
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-orange-500 hover:bg-orange-600",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
