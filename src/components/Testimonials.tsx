"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Point Theory transformed our entire data pipeline. Their AI agents reduced our processing time by 85% and the RAG system they built gives our team instant access to years of institutional knowledge.",
    name: "Sarah Chen",
    role: "CTO",
    company: "DataStream Inc.",
    rating: 5,
  },
  {
    quote:
      "Working with Point Theory felt like having a world-class AI team embedded in our company. They didn't just deliver a product—they transformed how we think about technology.",
    name: "Marcus Rivera",
    role: "VP of Engineering",
    company: "FinLeap",
    rating: 5,
  },
  {
    quote:
      "The automation platform Point Theory built handles 10x our previous volume with half the team. The ROI was visible within the first month of deployment.",
    name: "Aisha Patel",
    role: "CEO",
    company: "LogiTech Solutions",
    rating: 5,
  },
  {
    quote:
      "Their deep expertise in both AI and enterprise architecture is rare. Point Theory designed a system that scaled from prototype to production in record time.",
    name: "David Kim",
    role: "Director of IT",
    company: "MedTech Global",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px]">
        <div className="ambient-glow ambient-glow-violet opacity-10" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-[Space_Grotesk, sans-serif]"
          >
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 font-[Space_Grotesk, sans-serif]">
            Trusted by{" "}
            <span className="gradient-text-alt">Industry Leaders</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed">
            Hear from the teams and leaders who've partnered with us to build
            intelligent systems that deliver real results.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="glass-card rounded-3xl p-10 group hover:bg-white/[0.06] transition-all duration-500 relative"
    >
      {/* Quote mark */}
      <Quote className="absolute top-8 right-8 text-violet-500/10 w-16 h-16 group-hover:text-violet-500/20 transition-colors duration-500" />

      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="text-amber-400 fill-amber-400"
          />
        ))}
      </div>

      <p className="text-white/60 leading-relaxed mb-8 text-sm italic">
        "{testimonial.quote}"
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
          {testimonial.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <div className="font-semibold text-white font-[Space_Grotesk, sans-serif]">
            {testimonial.name}
          </div>
          <div className="text-xs text-white/40">
            {testimonial.role} at {testimonial.company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
