import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [cards, setCards] = useState([
    { title: "Getting Started", content: "This card explains how to get started with the project." },
    { title: "Next.js + TypeScript", content: "Using TypeScript ensures type safety and cleaner code." },
    { title: "Tailwind CSS", content: "Tailwind helps to style components quickly and efficiently." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = (title: string, content: string) => {
    setCards([...cards, { title, content }]);
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">🏠 Home Page</h1>
      <p className="mb-6 text-gray-600">
        Welcome to the Home page of ALX Project 2! Below are some sample cards.
      </p>

      {/* bouton pour ouvrir le modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        ➕ Add New Post
      </button>

      {/* affichage des cartes */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>

      {/* modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCard}
      />
    </div>
  );
}
