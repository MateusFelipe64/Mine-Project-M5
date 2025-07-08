import { ReactNode } from "react";

interface CardListProps {
  children: ReactNode;
  title: string;
}

export default function CardList({ children, title }: CardListProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {children}
      </div>
    </div>
  );
}