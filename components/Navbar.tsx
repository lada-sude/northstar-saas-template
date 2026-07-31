"use client";

import { motion } from "framer-motion";
import Logo from "./logo";
import LoginButton from "@/components/LoginButton";

const links = [
  { label: "Overview", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80"
    >
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="transition hover:opacity-90">
          <Logo />
        </a>

        <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-2 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-200 md:gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950 dark:hover:bg-slate-700 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <LoginButton />
      </nav>
    </motion.header>
  );
}