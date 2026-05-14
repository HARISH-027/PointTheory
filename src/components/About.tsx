"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Cpu, Zap, Globe } from "lucide-react";

const capabilities = [
  {
    icon: Shield,
    title: "Enterprise Grade",
    description: "SOC2 Type II, HIPAA, and GDPR compliant infrastructure for secure AI deployment.",
  },
  {
    icon: Cpu,
    title: "Hardware Optimized",
    description: "Direct optimization for NVIDIA H100 and A100 clusters for maximum throughput.",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Sub-100ms latency for real-time agentic reasoning and decision making.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Distributed infrastructure across 20+ regions for low-latency worldwide access.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-zinc-950/50">
      <div className="container-scale px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="label-caps">Platform Infrastructure</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              The Engine for <br />
              <span className="text-zinc-500">Autonomous Systems.</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              Point Theory is the foundational layer for modern AI. We provide the 
              computational infrastructure and high-quality data pipelines that 
              enable enterprises to build models that actually work in production.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((cap, i) => (
                <div key={cap.title} className="flex flex-col gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <cap.icon size={16} className="text-white" />
                  </div>
                  <h4 className="text-sm font-bold">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-zinc-900/50 rounded-3xl border border-white/5 overflow-hidden group"
          >
            {/* Mock Dashboard / Visual element */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="w-full h-full border border-white/10 rounded-2xl bg-black/40 backdrop-blur-md p-6 flex flex-col gap-4 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[10px] text-zinc-600 font-mono tracking-tighter">system_status: operational</div>
                </div>
                <div className="space-y-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-4 bg-white/5 rounded-full w-full relative overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${Math.random() * 60 + 30}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        className="absolute inset-0 bg-white/10"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-auto grid grid-cols-2 gap-4">
                  <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
                  <div className="h-24 bg-white/5 rounded-xl border border-white/5" />
                </div>
              </div>
            </div>
            
            {/* Decorative dots */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


