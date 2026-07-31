import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-12 text-white shadow-[0_24px_70px_-24px_rgba(2,8,23,0.8)] dark:border-slate-700 sm:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">Ready to launch</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Turn this starter into your next premium product.</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">Replace the demo copy, connect your own data, and start selling a polished experience in hours instead of weeks.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/dashboard">
              <Button variant="default" className="w-full">
                Open dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="#hero">
              <Button variant="secondary" className="w-full border-white/20 bg-white/10 text-white hover:bg-white/20">Back to top</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
