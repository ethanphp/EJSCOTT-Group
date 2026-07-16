"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function StickerBadge({
  children,
  color = "green",
  rotate = -3,
  className = "",
}: {
  children: ReactNode;
  color?: "green" | "blue";
  rotate?: number;
  className?: string;
}) {
  const bg = color === "green" ? "bg-green" : "bg-blue";
  const text = color === "blue" ? "text-white" : "text-ink";

  return (
    <motion.span
      initial={{ rotate: 0, opacity: 0, scale: 0.9 }}
      whileInView={{ rotate, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
      className={`sticker inline-block rounded-2xl px-4 py-1 ${bg} ${text} ${className}`}
    >
      {children}
    </motion.span>
  );
}
