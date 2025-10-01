import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
      <h2 className="text-xl font-bold text-blue-600">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-500 text-sm">
        {address.street}, {address.city}
      </p>
    </div>
  );
}
