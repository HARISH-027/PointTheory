"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BrainCircuit,
  Bot,
  Database,
  Workflow,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    icon: BrainCircuit,
    title: "AI Development",
    description: "Build custom LLM applications, multimodal systems, and production-ready AI software.",
    className: "md:col-span-2 md:row-span-2",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    icon: Bot,
    title: "Agentic Workflows",
    description: "Autonomous agents that can reason, plan, and execute complex business logic.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Database,
    title: "Enterprise RAG",
    description: "Transform your proprietary data into a queryable knowledge base with high precision.",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Intelligent automation for high-volume operational tasks.",
    className: "md:col-span-2 md:row-span-1",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-black">
      <div className="container-scale px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="label-caps">Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Enterprise-grade AI <br /> 
              <span className="text-zinc-500 text-3xl md:text-4xl">for the most ambitious teams.</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 text-sm font-medium hover:text-zinc-400 transition-colors">
            View all solutions <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4" ref={ref}>
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.8 }}
              className={`glass-card-scale p-8 group relative overflow-hidden flex flex-col justify-between min-h-[300px] ${item.className}`}
            >
              {item.image && (
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <img src={item.image} alt="" className="w-full h-full object-cover" />
                </div>
              )}
              
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <item.icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10 mt-8">
                <span className="text-xs font-semibold uppercase tracking-wider group-hover:text-white text-zinc-600 transition-colors inline-flex items-center gap-2">
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

