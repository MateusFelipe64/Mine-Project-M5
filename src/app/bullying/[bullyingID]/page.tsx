import Link from "next/link";
import { fetchBullyingById } from "@/lib/api";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    bullyingID: string;
  };
}

export default async function BullyingDetailPage({ params }: PageProps) {
  const data = await fetchBullyingById(params.bullyingID);

  if (!data) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <article className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-red-700 mb-6">{data.title}</h1>
        <div
          className="prose max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        <div className="mt-8">
          <Link href="/bullying" legacyBehavior>
            <a className="text-red-600 hover:text-red-800 font-medium">
              ← Voltar para Bullying
            </a>
          </Link>
        </div>
      </article>
    </div>
  );
}
