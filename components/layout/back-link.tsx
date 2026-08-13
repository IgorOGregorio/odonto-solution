import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackLink({
  href = "/",
  label = "Voltar à clínica",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-11 min-w-11 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
    >
      <ArrowLeft className="size-4" aria-hidden />
      {label}
    </Link>
  );
}
