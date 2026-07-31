import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for solo creators and early-stage products.",
    features: ["Landing page", "Supabase auth", "Protected dashboard", "Reusable UI kit"],
    featured: false,
  },
  {
    name: "Growth",
    price: "$79",
    description: "A more complete foundation for teams shipping fast.",
    features: ["Everything in Starter", "Dark/light themes", "Profile + account pages", "Priority customization guidance"],
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700 dark:text-sky-300">Pricing</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-slate-50 sm:text-4xl">A premium foundation that scales with your product.</h2>
        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">Use the starter as-is for your MVP or extend it into a full marketplace product with your own pricing and data model.</p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {plans.map((plan) => (
          <Card key={plan.name} className={plan.featured ? "border-sky-300 bg-slate-950 text-white" : ""}>
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <CardTitle className={plan.featured ? "text-white" : ""}>{plan.name}</CardTitle>
                {plan.featured ? <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">Popular</span> : null}
              </div>
              <CardDescription className={plan.featured ? "text-slate-300" : ""}>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="text-4xl font-semibold">{plan.price}<span className="text-base font-medium text-slate-500 dark:text-slate-400">/mo</span></div>
              <ul className="space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant={plan.featured ? "default" : "secondary"} className={plan.featured ? "w-full" : "w-full"}>Choose plan</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
