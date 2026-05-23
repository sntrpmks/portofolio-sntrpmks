"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-bg neo-border border-b-4 px-6 py-4 flex justify-between items-center shadow-[0_4px_0_0_rgba(17,17,17,1)]">
      <Link href="/" className="text-2xl font-black tracking-tighter uppercase">
        Sinatria<span className="text-pink"> </span>Pamungkas
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex gap-6">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="font-bold text-lg hover:bg-main hover:text-black px-4 py-2 neo-border neo-shadow bg-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden neo-button bg-main p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-blue neo-border border-t-0 p-6 flex flex-col gap-4 md:hidden shadow-[0_6px_0_0_rgba(17,17,17,1)]"
        >
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-black text-2xl uppercase text-white hover:text-main drop-shadow-[2px_2px_0_#111]"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
