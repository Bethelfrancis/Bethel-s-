"use client";

import { motion, type Variants } from "framer-motion";
import { type PropsWithChildren } from "react";

const pageVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export function PageTransition({ children }: PropsWithChildren) {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="overflow-hidden"
    >
      {children}
    </motion.main>
  );
}
