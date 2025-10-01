// Example of a simple interface
export interface User {
  id: number;
  name: string;
  email: string;
}

// ✅ Interface pour la carte
export interface CardProps {
  title: string;
  content: string;
}
// ✅ Interface pour les boutons
export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;
  onClick?: () => void;
}


