"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Fingerprint,
  ShieldAlert,
  ShieldCheck,
  Telescope,
} from "lucide-react";

const policies = [
  {
    title: "Protected auth",
    description: "Supabase-backed authentication keeps user sign-in and session management secure and predictable.",
    icon: ShieldAlert,
  },
  {
    title: "Account health monitoring",
    description: "Role-based flows and account safeguards make it easier to build trust and scale responsibly.",
    icon: Activity,
  },
  {
    title: "Audit-friendly structure",
    description: "Clean server and client boundaries make it straightforward to add secure data handling and review workflows.",
    icon: Telescope,
  },
  {
    title: "Privacy-first defaults",
    description: "The starter is built to support GDPR-conscious patterns and an easy path to better compliance work.",
    icon: Fingerprint,
  },
  {
    title: "Reliability by design",
    description: "A modern stack, strong typing, and reusable UI primitives help keep the experience dependable.",
    icon: ShieldCheck,
  },
];

export default function Security() {
  return (
    <section id="security" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">Security & reliability</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            A strong foundation for customer trust.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Northstar is designed for founders who want a professional SaaS experience without starting from a blank page.
          </p>

          <div className="mt-6 rounded-[1.25rem] border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-950">Production-ready architecture</p>
                <p className="text-sm text-slate-600">The starter is structured so you can ship faster with fewer foundation risks.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {policies.map((policy, index) => {
            const Icon = policy.icon;

            return (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{policy.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{policy.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}