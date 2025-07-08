import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Introdução */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Bem-vindo à <span className="text-indigo-600">Metalaliza Z</span>
        </h1>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Um espaço feito de jovem pra jovem, onde mente e emoção andam juntas rumo ao equilíbrio.
          Descubra técnicas de autocuidado, canais reais de apoio e dicas valiosas para lidar com o bullying.
          Respira fundo, se conecta e vem com a gente nessa jornada por mais saúde mental. 💚
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <Link href="/autocuidado" className="group">
            <div className="bg-indigo-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-all h-full group-hover:bg-indigo-50">
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">Autocuidado</h2>
              <p className="text-gray-600">Aprenda técnicas e práticas para cuidar da sua saúde mental no dia a dia.</p>
            </div>
          </Link>

          <Link href="/apoio" className="group">
            <div className="bg-green-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-all h-full group-hover:bg-green-50">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Apoio</h2>
              <p className="text-gray-600">Encontre recursos e suporte para quando você precisar de ajuda.</p>
            </div>
          </Link>

          <Link href="/bullying" className="group">
            <div className="bg-red-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-all h-full group-hover:bg-red-50">
              <h2 className="text-2xl font-bold text-red-700 mb-4">Bullying</h2>
              <p className="text-gray-600">Informações e estratégias para lidar com situações de bullying.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
