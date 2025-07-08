import { fetchApoioById } from "@/lib/api";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    apoioID: string;
  };
}

export default async function ApoioDetailPage({ params }: PageProps) {
  const data = await fetchApoioById(params.apoioID);

  if (!data) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <article className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6">{data.title}</h1>
        <div 
          className="prose max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        <div className="mt-8">
          <a 
            href="/apoio" 
            className="text-green-600 hover:text-green-800 font-medium"
          >
            ← Voltar para Apoio
          </a>
        </div>
      </article>
    </div>
  );
}