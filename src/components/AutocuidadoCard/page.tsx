import Link from "next/link";

interface AutocuidadoCardProps {
  id: string;
  title: string;
  description: string;
}

export default function AutocuidadoCard({ id, title, description }: AutocuidadoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-indigo-700 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      <Link 
        href={`/autocuidado/${id}`}
        className="text-indigo-600 hover:text-indigo-800 font-medium"
      >
        Ler mais →
      </Link>
    </div>
  );
}