import Link from "next/link";
import { FaHeart, FaHandsHelping, FaExclamationTriangle } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
<h1 className="text-4xl font-bold mb-4 text-purple-800">
  Bem-vindo à Metalaliza Z — um espaço feito de jovem pra jovem, onde mente e emoção andam juntas rumo ao equilíbrio. Aqui a gente fala sério sobre saúde mental, mas sem peso, sem tabu e com muita leveza.
  <br />
  <br />
  🌐 Descubra técnicas de autocuidado, canais reais de apoio e informações que fazem a diferença no seu dia a dia.
  <br />
  💡 Tudo organizado de forma prática, interativa e com visual que conversa com você, geração Z.
  <br />
  🛟 Tá na dúvida, tá na bad, tá curioso? Cola com a gente. Metalaliza, respira e bora crescer junto.
</h1>
<p className="mb-8 text-lg text-gray-700 text-center max-w-xl">
  Escolha um dos temas abaixo para acessar conteúdos de autocuidado, apoio ou bullying.
</p>
<nav className="flex flex-col gap-6 w-full max-w-md">
  <Link
    href="/autocuidado"
    className="flex items-center gap-4 p-4 rounded-lg bg-white shadow hover:bg-purple-100 transition"
  >
    <FaHeart className="text-pink-500 text-2xl" />
    <span className="text-xl font-medium text-gray-800">Autocuidado</span>
  </Link>
  <Link
    href="/apoio"
    className="flex items-center gap-4 p-4 rounded-lg bg-white shadow hover:bg-blue-100 transition"
  >
    <FaHandsHelping className="text-blue-500 text-2xl" />
    <span className="text-xl font-medium text-gray-800">Apoio</span>
  </Link>
  <Link
    href="/bullying"
    className="flex items-center gap-4 p-4 rounded-lg bg-white shadow hover:bg-yellow-100 transition"
  >
    <FaExclamationTriangle className="text-yellow-500 text-2xl" />
    <span className="text-xl font-medium text-gray-800">Bullying</span>
  </Link>
</nav>
      </main>
    );
  }

