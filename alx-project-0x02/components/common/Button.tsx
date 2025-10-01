import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
  children,
  onClick,
}) => {
  const sizeClasses =
    size === "small"
      ? "px-3 py-1 text-sm"
      : size === "large"
      ? "px-6 py-3 text-lg"
      : "px-4 py-2 text-base";

  const shapeClasses =
    shape === "rounded-sm"
      ? "rounded-sm"
      : shape === "rounded-full"
      ? "rounded-full"
      : "rounded-md";

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClasses} ${shapeClasses} hover:bg-blue-700 transition-colors`}
    >
      {children}
    </button>
  );
};

export default Button;
