import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/90">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-950">Northstar</p>
            <p className="mt-1 text-sm text-slate-500">© {new Date().getFullYear()} Northstar. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <a href="/privacy" className="transition hover:text-slate-950">Privacy Policy</a>
            <a href="/terms" className="transition hover:text-slate-950">Terms & Conditions</a>
            <a href="mailto:hello@northstar.example" className="inline-flex items-center gap-2 transition hover:text-slate-950">
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>
        </div>

        <div className="mt-6 rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600">
          Built for founders who want a premium product foundation, a flexible UI system, and a clean path to launch.
        </div>
      </div>
    </footer>
  );
}