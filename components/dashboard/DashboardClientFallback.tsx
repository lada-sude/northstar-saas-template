"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import SaaSDashboard from "./SaaSDashboard";

type DashboardUser = {
  id?: string;
  email?: string | null;
  user_metadata?: {
    full_name?: string | null;
    avatar_url?: string | null;
  } | null;
};

export default function DashboardClientFallback() {
  const router = useRouter();
  const supabase = createClient();
  const [status, setStatus] = useState<{ loading: boolean; user?: DashboardUser }>({
    loading: true,
  });

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (!mounted) return;

        if (user && !error) {
          setStatus({ loading: false, user });
          return;
        }

        router.replace("/");
      } catch {
        router.replace("/");
      }
    })();

    return () => {
      mounted = false;
    };
  }, [router, supabase]);

  if (status.loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950">
        <div className="animate-pulse text-slate-600 dark:text-slate-300">Loading dashboard…</div>
      </div>
    );
  }

  return <SaaSDashboard user={status.user} profile={null} />;
}
