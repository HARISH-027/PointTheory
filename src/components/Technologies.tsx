"use client";

import { motion } from "framer-motion";

const partners = [
  "OpenAI", "NVIDIA", "Microsoft", "Google Cloud", "AWS", "Meta", "Anthropic", "Hugging Face"
];

export function Technologies() {
  return (
    <section className="py-24 bg-black border-y border-white/5">
      <div className="container-scale px-6">
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-40 grayscale">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-xl font-black tracking-tighter text-white hover:opacity-100 transition-opacity cursor-default"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

