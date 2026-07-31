export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Client-side auth handling is performed inside the dashboard pages/components.
  // Keep the layout lightweight so the client can finalize OAuth redirects.
  return <>{children}</>;
}
