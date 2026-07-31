import { type ReactNode } from "react";

interface DropdownProps {
  children: ReactNode;
  trigger: ReactNode;
}

export function Dropdown({ children, trigger }: DropdownProps) {
  return (
    <div className="relative inline-block">
      <div>{trigger}</div>
      <div className="absolute right-0 z-20 mt-2 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-900">
        {children}
      </div>
    </div>
  );
}

export function DropdownItem({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return (
    <button type="button" onClick={onClick} className="flex w-full items-center rounded-xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
      {children}
    </button>
  );
}
