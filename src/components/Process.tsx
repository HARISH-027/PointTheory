"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Data Collection",
    description: "Aggregation of high-quality, multimodal data from diverse enterprise sources.",
  },
  {
    title: "RLHF & Labeling",
    description: "Human-in-the-loop reinforcement learning to align models with business intent.",
  },
  {
    title: "Model Training",
    description: "Distributed fine-tuning on proprietary datasets using custom compute clusters.",
  },
  {
    title: "Evaluation",
    description: "Rigorous red-teaming and benchmarking against safety and performance metrics.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-black">
      <div className="container-scale px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
          {steps.map((step, i) => (
            <div key={step.title} className="bg-black p-10 flex flex-col gap-6 group hover:bg-zinc-900/50 transition-colors">
              <span className="text-4xl font-bold text-zinc-800 group-hover:text-white transition-colors">0{i + 1}</span>
              <div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

