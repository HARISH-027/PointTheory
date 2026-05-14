"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Products: ["Forge", "Nexus", "Core", "Sentinel"],
  Solutions: ["Finance", "Energy", "Healthcare", "Defense"],
  Company: ["About", "Careers", "Security", "Contact"],
  Resources: ["Documentation", "API", "Blog", "Events"],
};

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pb-12 pt-24 px-6">
      <div className="container-scale">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-24">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              {/* Pure CSS Minimalist Dot Logo */}
              <div className="relative w-5 h-5 bg-white rounded-full flex items-center justify-center opacity-50 overflow-hidden">
                <div className="absolute inset-y-0 w-[1px] bg-black"></div>
              </div>
              <span className="text-sm font-bold tracking-tight text-white uppercase flex items-center">
                Point<span className="text-zinc-500">.theory</span>
              </span>
            </Link>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-[200px]">
              The foundational layer for modern autonomous intelligence.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-6">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-xs text-zinc-500 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider-thin mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <span className="text-[10px] text-zinc-600 font-medium">
              &copy; {new Date().getFullYear()} Point Theory, Inc.
            </span>
            <Link href="#" className="text-[10px] text-zinc-600 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-[10px] text-zinc-600 hover:text-white transition-colors">
              Privacy
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[10px] text-zinc-600 hover:text-white transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-[10px] text-zinc-600 hover:text-white transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-[10px] text-zinc-600 hover:text-white transition-colors">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


