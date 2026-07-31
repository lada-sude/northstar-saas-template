import { type ReactNode } from "react";

interface ToastProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function Toast({ title, description, children }: ToastProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <p className="font-semibold text-slate-900 dark:text-slate-100">{title}</p>
      {description ? <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</p> : null}
      {children}
    </div>
  );
}
