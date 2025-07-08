import Link from "next/link";

interface BullyingCardProps {
  id: string;
  title: string;
  description: string;
}

export default function BullyingCard({ id, title, description }: BullyingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-red-700 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      <Link 
        href={`/bullying/${id}`}
        className="text-red-600 hover:text-red-800 font-medium"
      >
        Ler mais →
      </Link>
    </div>
  );
}