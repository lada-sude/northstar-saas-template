"use client";

import { ArrowUpRight, BarChart3, CircleDollarSign, CreditCard, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "MRR", value: "$24.8k", description: "+12.4% vs last month", icon: CircleDollarSign },
  { label: "Active users", value: "8,240", description: "+8.1% this week", icon: Sparkles },
  { label: "Conversion", value: "6.8%", description: "Healthy lifecycle funnel", icon: BarChart3 },
  { label: "Revenue", value: "$96k", description: "Forecasted next quarter", icon: CreditCard },
];

const activity = [
  { title: "New onboarding flow launched", detail: "25% lift in activation", time: "12m ago" },
  { title: "Billing sync completed", detail: "Stripe plans updated", time: "1h ago" },
  { title: "Support backlog cleared", detail: "24 tickets closed", time: "3h ago" },
];

type DashboardUser = {
  email?: string | null;
  user_metadata?: {
    full_name?: string | null;
    avatar_url?: string | null;
  } | null;
};

type DashboardProfile = {
  full_name?: string | null;
  company?: string | null;
  website?: string | null;
};

export default function SaaSDashboard({
  user,
  profile,
}: {
  user?: DashboardUser;
  profile?: DashboardProfile | null;
}) {
  const fullName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Studio Member";

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-white shadow-[0_20px_60px_-24px_rgba(15,23,42,0.7)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Badge className="bg-white/10 text-slate-100">Premium template</Badge>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Welcome back, {fullName}</h1>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">This dashboard is ready for your product, your analytics, and your brand. Replace the demo copy with your own flows in minutes.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm backdrop-blur">
            <p className="font-semibold">Profile ready</p>
            <p className="mt-1 text-slate-300">{profile?.full_name || user?.email}</p>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.label} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
              <Card className="h-full">
                <CardContent className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">{item.value}</p>
                    <p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400">{item.description}</p>
                  </div>
                  <div className="rounded-2xl bg-sky-50 p-3 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300">
                    <Icon className="h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <div>
                <CardTitle>Weekly performance</CardTitle>
                <CardDescription>Dummy analytics that can be replaced with your real metrics.</CardDescription>
              </div>
              <Button variant="secondary" size="sm">
                View report
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mt-2 flex h-56 items-end gap-3 rounded-3xl bg-slate-50 p-4 dark:bg-slate-950/60">
              {[44, 62, 58, 84, 92, 74, 88].map((height, index) => (
                <div key={index} className="flex-1 rounded-t-2xl bg-gradient-to-t from-sky-600 to-slate-900" style={{ height: `${height}%` }} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent activity</CardTitle>
            <CardDescription>Keep your product updates visible at a glance.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {activity.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200/80 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/60">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-slate-900 dark:text-slate-100">{item.title}</p>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{item.time}</span>
                </div>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.detail}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
