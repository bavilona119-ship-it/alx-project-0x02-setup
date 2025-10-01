import React from "react";
import { CardProps } from "../../interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{content}</p>
    </div>
  );
};

export default Card;
