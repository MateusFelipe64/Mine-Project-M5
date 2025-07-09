import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mentaliza Z",
  description: "Saúde Mental para Jovens",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-gray-800 dark:bg-zinc-900 dark:text-gray-100`}>
        <Providers>
          {/* HEADER */}
          <header className="bg-white dark:bg-zinc-900 border-b shadow-sm">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
              <a href="/">
                <img src="/logo-light.png" alt="Logo clara" className="h-8 dark:hidden" />
                <img src="/logo-dark.png" alt="Logo escura" className="h-10 hidden dark:block" />
              </a>

              <nav className="flex space-x-4 text-base items-center">
                <a href="/autocuidado" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors">
                  Autocuidado
                </a>
                <a href="/apoio" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors">
                  Apoio
                </a>
                <a href="/bullying" className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors">
                  Bullying
                </a>
                <ThemeToggle />
              </nav>
            </div>
          </header>

          {/* MAIN */}
          <main className="flex-grow">{children}</main>

          {/* FOOTER */}
          <footer className="bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-gray-400 py-8 text-base text-center">
            <div className="container mx-auto px-4">
              <p>© {new Date().getFullYear()} Saúde Mental para Jovens. Todos os direitos reservados.</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
