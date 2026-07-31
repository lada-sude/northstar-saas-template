import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle();

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">Profile</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Manage your personal brand</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile details</CardTitle>
          <CardDescription>Keep your account information polished and ready for your product team.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <Input label="Full name" defaultValue={profile?.full_name || user.user_metadata?.full_name || ""} />
          <Input label="Email" defaultValue={user.email || ""} />
          <Input label="Company" defaultValue={profile?.company || ""} />
          <Input label="Website" defaultValue={profile?.website || ""} />
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-3">
        <Button>Save changes</Button>
        <Button variant="secondary">Reset</Button>
      </div>
    </div>
  );
}
