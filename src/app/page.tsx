"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    href: "/autocuidado",
    title: "Autocuidado",
    desc: "Aprenda técnicas e práticas para cuidar da sua saúde mental no dia a dia.",
    bgLight: "bg-indigo-100",
    bgHover: "hover:bg-indigo-200",
    text: "text-indigo-700",
    darkText: "dark:text-indigo-300",
    darkBg: "dark:bg-zinc-800",
  },
  {
    href: "/apoio",
    title: "Apoio",
    desc: "Encontre recursos e suporte para quando você precisar de ajuda.",
    bgLight: "bg-green-100",
    bgHover: "hover:bg-green-200",
    text: "text-green-700",
    darkText: "dark:text-green-300",
    darkBg: "dark:bg-zinc-800",
  },
  {
    href: "/bullying",
    title: "Bullying",
    desc: "Informações e estratégias para lidar com situações de bullying.",
    bgLight: "bg-red-100",
    bgHover: "hover:bg-red-200",
    text: "text-red-700",
    darkText: "dark:text-red-300",
    darkBg: "dark:bg-zinc-800",
  },
];

export default function Home() {
  return (
    <motion.div
      className="bg-white dark:bg-zinc-900 py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Introdução */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Bem-vindo à <span className="text-indigo-600 dark:text-indigo-400">Mentaliza Z</span>
        </motion.h1>

        <motion.p
          className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Um espaço construído de jovem pra jovem, com escuta, coragem e afeto.
          Aqui, você encontra apoio real pra cuidar da sua saúde emocional,
          fortalecer sua autoestima e aprender a se proteger de situações difíceis como o bullying.
          Mais que um site, isso é um movimento por uma juventude mais consciente, acolhida e empoderada.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
            >
              <Link href={card.href} className="group block h-full">
                <div
                  className={`${card.bgLight} ${card.darkBg} ${card.bgHover} p-8 rounded-lg shadow-md hover:shadow-lg transition-all h-full`}
                >
                  <h2 className={`text-2xl font-bold ${card.text} ${card.darkText} mb-4`}>
                    {card.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">{card.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
