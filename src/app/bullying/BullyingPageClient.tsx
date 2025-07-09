"use client";

import { motion } from "framer-motion";
import BullyingList from "@/components/BullyingList";

export default function BullyingPageClient() {
  return (
    <motion.main
      className="min-h-screen container mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
        Bullying
      </h1>
      <BullyingList />
    </motion.main>
  );
}
