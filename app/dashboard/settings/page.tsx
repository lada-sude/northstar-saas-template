import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/");
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">Settings</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Tune the workspace for your team</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Workspace preferences</CardTitle>
          <CardDescription>Fine-tune the experience for your team and product launch.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input label="Workspace name" defaultValue="Northstar Studio" />
          <Input label="Default timezone" defaultValue="UTC" />
          <Input label="Support email" defaultValue={user.email || ""} />
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-3">
        <Button>Update settings</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    </div>
  );
}
