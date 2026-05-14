"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { InteractiveScene } from "./InteractiveScene";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
      {/* Background visual - 3D Interactive Element */}
      <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full pointer-events-auto opacity-70">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/80 to-black z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
        <InteractiveScene />
      </div>

      <div className="container-scale px-6 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-caps">The Foundational Layer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-10 leading-[0.9]"
          >
            Accelerating <br />
            <span className="text-gradient-iridescent">the Theory</span>
            <br />
            of Intelligence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed"
          >
            Point Theory provides the foundational architecture and computational 
            power to deploy world-class autonomous systems across the enterprise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-24"
          >
            <Link href="#contact" className="btn-scale btn-scale-primary px-10 py-4 text-base">
              Get Started
            </Link>
            <Link href="#services" className="btn-scale btn-scale-secondary px-10 py-4 text-base">
              Explore .theory
            </Link>
          </motion.div>

          {/* Integrated Trust Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-12 border-t border-white/5"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600 mb-8">
              Trusted by global innovators
            </p>
            <div className="flex flex-wrap gap-x-12 gap-y-6 opacity-30 grayscale contrast-125">
              {["OpenAI", "NVIDIA", "Microsoft", "Meta"].map((name) => (
                <span key={name} className="text-sm font-black tracking-tighter">{name}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



