import React from "react";
import { type PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{content}</p>
      <p className="mt-4 text-sm text-gray-500">👤 User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
