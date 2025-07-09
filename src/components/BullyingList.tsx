"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Bullying {
  id: number;
  tipo: string;
  descricao: string;
  como_agir: string;
}

export default function BullyingList() {
  const [data, setData] = useState<Bullying[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBullying = async () => {
      try {
        const res = await fetch("https://api-saude-mental-jovens.onrender.com/api/bullying");
        if (!res.ok) throw new Error("Erro ao buscar dados da API");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError("Erro ao carregar dados 😢");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBullying();
  }, []);

  if (loading)
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-gray-600 dark:text-gray-300"
      >
        Carregando...
      </motion.p>
    );

  if (error)
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-red-600 dark:text-red-400"
      >
        {error}
      </motion.p>
    );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.15 },
        },
      }}
      className="space-y-6"
    >
      {data.map((item) => (
        <motion.div
          key={item.id}
          className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.03, boxShadow: "0 8px 15px rgba(0,0,0,0.15)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{item.tipo}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">{item.descricao}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            Como agir: {item.como_agir}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
