import Image from "next/image";

interface AvatarProps {
  src?: string | null;
  alt: string;
  name: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses: Record<NonNullable<AvatarProps["size"]>, string> = {
  sm: "h-9 w-9 text-sm",
  md: "h-12 w-12 text-base",
  lg: "h-16 w-16 text-lg",
};

export function Avatar({ src, alt, name, size = "md" }: AvatarProps) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0] || "")
    .join("")
    .toUpperCase();

  return (
    <div className={`relative overflow-hidden rounded-full bg-slate-200 text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700 ${sizeClasses[size]}`.trim()}>
      {src ? (
        <Image src={src} alt={alt} width={64} height={64} unoptimized className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center font-semibold">{initials}</div>
      )}
    </div>
  );
}
