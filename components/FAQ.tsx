"use client";

const questions = [
  {
    question: "What is Northstar?",
    answer: "Northstar is a premium Next.js + Supabase + Tailwind starter kit for founders who want a polished SaaS experience without building every foundation from scratch.",
  },
  {
    question: "Is this ready for production?",
    answer: "The template is structured for production use, with strong typing, reusable UI primitives, Supabase auth, protected routes, and a responsive dashboard shell.",
  },
  {
    question: "Can I customize the branding?",
    answer: "Yes. The UI is designed to be easy to tailor with your product name, palette, copy, and analytics data.",
  },
  {
    question: "What is included beyond the landing page?",
    answer: "You get an authenticated dashboard, profile and settings pages, a reusable component system, dark/light modes, and deployment guidance.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-50/90 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">FAQ</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">
            Questions founders often ask before they buy.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {questions.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-200 dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-sky-400"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-950 marker:hidden dark:text-slate-100">
                {item.question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}