"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

const highlights = [
  "Supabase auth included",
  "Responsive dashboard shell",
  "Clean reusable UI system",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20"
    >
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700"
        >
          <Sparkles className="h-4 w-4" />
          Premium SaaS starter kit
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
        >
          Launch your product with a polished, modern foundation.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
        >
          Northstar gives you a production-ready Next.js app with Supabase auth, reusable UI components, a premium dashboard template, and flexible marketing pages ready to sell.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Explore the template
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            See the stack
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:flex-wrap"
        >
          {highlights.map((item) => (
            <div key={item} className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-sm ring-1 ring-slate-200">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative"
      >
        <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-sky-300/40 blur-3xl" />
        <div className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-indigo-300/40 blur-3xl" />

        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-[0_20px_80px_-30px_rgba(15,23,42,0.45)] backdrop-blur-sm sm:p-6">
          <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Product preview</p>
                <p className="mt-2 text-2xl font-semibold">Dashboard starter</p>
              </div>
              <div className="rounded-2xl bg-emerald-400/15 p-3 text-emerald-300">
                <ShieldCheck className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-slate-400">Auth flow</p>
                <p className="mt-2 text-lg font-semibold">Google OAuth ready</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-slate-400">Experience</p>
                <p className="mt-2 text-lg font-semibold">Premium dark/light UI</p>
              </div>
            </div>

            <div className="mt-3 rounded-2xl border border-sky-400/30 bg-sky-400/10 p-4">
              <div className="flex items-center gap-2 text-sm font-medium text-sky-200">
                <Sparkles className="h-4 w-4" />
                Built for marketplace sales
              </div>
              <div className="mt-4 h-2 rounded-full bg-white/10">
                <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-sky-400 to-cyan-300" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}