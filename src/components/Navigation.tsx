"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Solutions", href: "#services" },
  { label: "Products", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/5 bg-black/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-scale px-6 flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Pure CSS Minimalist Dot Logo */}
            <div className="relative w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
              <div className="absolute inset-y-0 w-[1.5px] bg-black"></div>
            </div>
            <span className="text-xl font-bold tracking-tighter text-white flex items-center">
              Point<span className="text-zinc-500">.theory</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="btn-scale btn-scale-secondary px-5 py-1.5"
            >
              Log in
            </Link>
            <Link
              href="#contact"
              className="btn-scale btn-scale-primary px-5 py-1.5"
            >
              Get started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/60 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-40 bg-black backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 gap-8"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * i }}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-zinc-400 hover:text-white transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            <div className="mt-auto mb-12 flex flex-col gap-4">
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-scale btn-scale-secondary w-full py-4 text-base"
              >
                Log in
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-scale btn-scale-primary w-full py-4 text-base"
              >
                Get started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


