"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  LayoutGrid,
  LogOut,
  Menu,
  Moon,
  Settings,
  SunMedium,
  UserCircle2,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { useTheme } from "next-themes";
import { createClient } from "@/lib/supabase/client";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface DashboardShellProps {
  user: {
    id?: string;
    email?: string | null;
    user_metadata?: {
      full_name?: string | null;
      avatar_url?: string | null;
    } | null;
  };
  children: ReactNode;
}

const navigation = [
  { href: "/dashboard", label: "Overview", icon: LayoutGrid },
  { href: "/dashboard/profile", label: "Profile", icon: UserCircle2 },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
  { href: "/dashboard/account", label: "Account", icon: BarChart3 },
];

export function DashboardShell({ user, children }: DashboardShellProps) {
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  useEffect(() => {
    // Defer setting mounted to the next tick to avoid synchronous setState
    const id = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  const currentTheme = mounted ? (theme === "system" ? resolvedTheme : theme) : "light";

  const fullName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Studio Member";
  const avatarUrl = user?.user_metadata?.avatar_url;

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        <aside className="hidden w-72 shrink-0 border-r border-slate-200/80 bg-white/80 p-6 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 lg:flex lg:flex-col">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white dark:bg-sky-500 dark:text-slate-950">NS</div>
            <div>
              <p className="text-sm font-semibold">Northstar</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">SaaS Starter Kit</p>
            </div>
          </div>

          <nav className="mt-8 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition ${isActive ? "bg-slate-950 text-white dark:bg-sky-500 dark:text-slate-950" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"}`.trim()}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold">Ready to ship</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Launch your product with auth, dashboards, and polished UI already wired in.</p>
          </div>
        </aside>

        <div className="flex-1">
          <header className="border-b border-slate-200/80 bg-white/80 px-4 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Button
                  variant="secondary"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setMobileMenuOpen((open) => !open)}
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-4 w-4" />
                </Button>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Welcome back</p>
                  <p className="text-lg font-semibold">{fullName}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="inline-flex"
                  onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                >
                  {mounted && currentTheme === "dark" ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="inline-flex"
                    onClick={() => setNotificationsOpen((open) => !open)}
                  >
                    <Bell className="h-4 w-4" />
                  </Button>

                  {notificationsOpen ? (
                    <div className="absolute right-0 z-20 mt-2 w-72 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-900">
                      <div className="flex items-center justify-between px-2 py-1">
                        <p className="text-sm font-semibold">Notifications</p>
                        <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                          Demo
                        </span>
                      </div>
                      <div className="mt-3 space-y-2">
                        {[
                          { title: "New feature preview", detail: "Theme and layout updates are ready." },
                          { title: "Product checklist", detail: "Your starter kit is 80% ready to customize." },
                        ].map((item) => (
                          <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/70">
                            <p className="text-sm font-medium">{item.title}</p>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-2 py-1.5 dark:border-slate-700 dark:bg-slate-800">
                  <Avatar src={avatarUrl ?? undefined} alt={fullName} name={fullName} size="sm" />
                  <div className="hidden text-left sm:block">
                    <p className="text-sm font-semibold">{fullName}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{user?.email}</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={handleLogout} className="hidden sm:inline-flex">
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {mobileMenuOpen ? (
              <div className="fixed inset-0 z-40 lg:hidden">
                <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
                <div className="absolute inset-x-3 top-3 rounded-[28px] border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-700 dark:bg-slate-900">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white dark:bg-sky-500 dark:text-slate-950">NS</div>
                      <div>
                        <p className="text-sm font-semibold">Quick navigation</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Jump to any dashboard area</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <nav className="mt-4 space-y-2">
                    {navigation.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium ${isActive ? "bg-slate-950 text-white dark:bg-sky-500 dark:text-slate-950" : "bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`.trim()}
                        >
                          <Icon className="h-4 w-4" />
                          {item.label}
                        </Link>
                      );
                    })}
                  </nav>

                  <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950/70">
                    <p className="text-sm font-semibold">Mobile-friendly</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">The dashboard shell now feels polished on smaller screens too.</p>
                  </div>
                </div>
              </div>
            ) : null}
          </header>

          <main className="p-4 sm:p-6 lg:p-8">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
              {children}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
