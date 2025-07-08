import Link from "next/link";

interface ApoioCardProps {
  id: string;
  title: string;
  description: string;
}

export default function ApoioCard({ id, title, description }: ApoioCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-green-700 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      <Link 
        href={`/apoio/${id}`}
        className="text-green-600 hover:text-green-800 font-medium"
      >
        Ler mais →
      </Link>
    </div>
  );
}