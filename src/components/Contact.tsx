"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", company: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-scale px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="label-caps">Contact</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Ready to <br />
              <span className="text-zinc-500 text-3xl md:text-4xl">scale with Point.theory?</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-12 leading-relaxed max-w-md">
              Speak with our engineers to learn how Point Theory can help you 
              build and deploy production-grade autonomous systems.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="text-sm font-bold border-b border-white/10 group-hover:border-white transition-colors pb-1 flex items-center gap-2">
                  Talk to an expert <ArrowRight size={16} />
                </div>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="text-sm font-bold border-b border-white/10 group-hover:border-white transition-colors pb-1 flex items-center gap-2">
                  Explore documentation <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card-scale p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-2 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-2 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800"
                    placeholder="john@company.ai"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Company</label>
                <input
                  type="text"
                  required
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-2 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-zinc-800"
                  placeholder="Your Company"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Message</label>
                <textarea
                  required
                  rows={3}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-2 text-sm focus:outline-none focus:border-white transition-colors resize-none placeholder:text-zinc-800"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                className="btn-scale btn-scale-primary w-full py-4 text-base gap-2"
              >
                {submitted ? "Sent Successfully" : (
                  <>
                    Submit Request <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


