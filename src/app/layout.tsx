// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Metalaliza Z",
  description: "Saúde Mental para Jovens",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-white text-gray-800`}>
        <header className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex justify-between items-center">
              <a href="/" className="text-lg font-semibold text-indigo-700">
                Saúde Mental Jovem
              </a>
              <div className="flex space-x-4 text-base">
                <a href="/autocuidado" className="text-gray-600 hover:text-indigo-500 transition-colors">
                  Autocuidado
                </a>
                <a href="/apoio" className="text-gray-600 hover:text-green-500 transition-colors">
                  Apoio
                </a>
                <a href="/bullying" className="text-gray-600 hover:text-red-500 transition-colors">
                  Bullying
                </a>
              </div>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-gray-50 text-gray-600 py-8 mt-16 text-base">
          <div className="container mx-auto px-4 text-center">
            <p>© {new Date().getFullYear()} Saúde Mental para Jovens. Todos os direitos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
