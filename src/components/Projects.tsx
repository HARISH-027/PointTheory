"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Project Forge",
    category: "Generative AI Infrastructure",
    description: "The world's first production-grade infrastructure for fine-tuning multimodal foundation models at scale.",
    metrics: ["10x Faster Training", "99% Data Accuracy", "50+ Enterprise Clients"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200",
  },
  {
    title: "Quantum Ledger",
    category: "Autonomous Finance",
    description: "Real-time autonomous financial auditing and fraud detection for high-frequency trading platforms.",
    metrics: ["$2B+ Processed/Day", "Sub-ms Detection", "Zero False Positives"],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-black overflow-hidden">
      <div className="container-scale px-6">
        <div className="mb-20">
          <span className="label-caps">Case Studies</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
            Real impact at <br />
            <span className="text-zinc-500">global scale.</span>
          </h2>
        </div>

        <div className="space-y-32" ref={ref}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: i * 0.2 }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center`}
            >
              <div className="flex-1 space-y-8">
                <div>
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4 block">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h3>
                  <p className="text-lg text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-white" />
                      <span className="text-sm font-medium text-zinc-300">{metric}</span>
                    </div>
                  ))}
                </div>

                <button className="btn-scale btn-scale-secondary gap-2 px-8 py-3">
                  Read Case Study <ArrowUpRight size={16} />
                </button>
              </div>

              <div className="flex-1 w-full">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/5 group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

