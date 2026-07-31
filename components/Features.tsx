"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Layers,
  Palette,
  Rocket,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const features = [
  {
    title: "Auth-ready foundation",
    icon: ShieldCheck,
    description: "Supabase auth and Google OAuth are already wired for a secure sign-in experience.",
  },
  {
    title: "Flexible dashboard shell",
    icon: Layers,
    description: "A polished sidebar, top navigation, analytics cards, and responsive layouts are ready to customize.",
  },
  {
    title: "Reusable UI kit",
    icon: Palette,
    description: "Buttons, cards, avatars, modals, inputs, and skeletons keep the interface consistent and premium.",
  },
  {
    title: "Light and dark themes",
    icon: Smartphone,
    description: "Switch between professional light and modern dark dashboard experiences without changing your structure.",
  },
  {
    title: "Fast time to launch",
    icon: Rocket,
    description: "The app already includes landing pages, auth, protected routes, and a dashboard experience for your MVP.",
  },
  {
    title: "Marketplace-ready polish",
    icon: BadgeCheck,
    description: "Elegant motion, crisp spacing, and a refined visual language make the template feel like a premium product.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">Core features</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
          Everything you need to turn a concept into a sellable SaaS experience.
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
          The starter ships with a reusable architecture, polished UI, and the essential workflows founders usually build from scratch.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group min-w-0 rounded-[1.5rem] border border-slate-200 bg-white/90 p-6 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/80 dark:border-slate-800 dark:bg-slate-900/80 dark:ring-slate-800 dark:hover:shadow-slate-950/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100 transition group-hover:bg-sky-100 dark:bg-sky-500/10 dark:text-sky-300 dark:ring-sky-500/20 dark:group-hover:bg-sky-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-slate-100">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}