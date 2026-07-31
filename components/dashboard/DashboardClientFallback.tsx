"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import SaaSDashboard from "./SaaSDashboard";
import { DashboardShell } from "./DashboardShell";

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
        // If the browser was redirected back from the OAuth provider,
        // let the client SDK process the URL and establish the session.
        if (
          typeof window !== "undefined" &&
          (window.location.href.includes("access_token") || window.location.href.includes("code") || window.location.href.includes("error="))
        ) {
          try {
            // Parse the URL and finalize the session if present.
            // getSessionFromUrl will be a no-op when there's nothing to parse.
            // @ts-expect-error - method exists on supabase-js v2 clients created via @supabase/ssr
            await supabase.auth.getSessionFromUrl();
            // Clean the URL so query fragments don't persist.
            window.history.replaceState({}, document.title, window.location.pathname);
          } catch {}
        }

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

  return (
    <DashboardShell user={status.user}>
      <SaaSDashboard user={status.user} profile={null} />
    </DashboardShell>
  );
}
