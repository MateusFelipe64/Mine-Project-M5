import Link from "next/link";
import { fetchAutocuidadoById } from "@/lib/api";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    autocuidadoID: string;
  };
}

export default async function AutocuidadoDetailPage({ params }: PageProps) {
  const data = await fetchAutocuidadoById(params.autocuidadoID);

  if (!data) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <article className="bg-white rounded-xl shadow-sm p-8 transition-colors">
        <h1 className="text-indigo-700 font-semibold text-3xl md:text-4xl mb-8">
          {data.title}
        </h1>

        <div
          className="prose prose-indigo max-w-none text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />

        <div className="mt-12">
          <Link href="/autocuidado" className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors">
            ← Voltar para Autocuidado
          </Link>
        </div>
      </article>
    </div>
  );
}
