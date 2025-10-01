import Card from "../components/common/Card";

export default function HomePage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">🏠 Home Page</h1>
      <p className="mb-8 text-gray-600">
        Welcome to the Home page of ALX Project 2! Below are some sample cards.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Getting Started"
          content="This card explains how to get started with the project."
        />
        <Card
          title="Next.js + TypeScript"
          content="Using TypeScript ensures type safety and cleaner code."
        />
        <Card
          title="Tailwind CSS"
          content="Tailwind helps to style components quickly and efficiently."
        />
      </div>
    </div>
  );
}
