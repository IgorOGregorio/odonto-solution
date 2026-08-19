import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionShell({
  children,
  className,
  bordered,
  id,
}: {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-28",
        bordered && "border-t border-border/50",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionRail({
  label,
  title,
  titleId,
  intro,
  action,
  children,
}: {
  label: string;
  title: string;
  titleId?: string;
  intro?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(16rem,20rem)_minmax(0,1fr)] lg:items-start lg:gap-16 xl:gap-20">
      <div className="lg:sticky lg:top-24">
        <p className="text-label text-primary">{label}</p>
        <h2
          id={titleId}
          className="mt-3 font-display text-3xl leading-tight sm:text-4xl"
        >
          {title}
        </h2>
        {intro && (
          <div className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
            {intro}
          </div>
        )}
        {action}
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function SimpleFlowList({ items }: { items: readonly string[] }) {
  return (
    <ol className="divide-y divide-border/70">
      {items.map((item, index) => (
        <li
          key={item}
          className="grid gap-4 py-8 first:pt-0 last:pb-0 sm:grid-cols-[4.5rem_1fr] sm:gap-8"
        >
          <span
            aria-hidden
            className="font-display text-5xl leading-none tabular-nums text-primary/25 sm:text-6xl"
          >
            {formatIndex(index)}
          </span>
          <p className="pt-1 text-lg leading-relaxed text-foreground sm:pt-2">
            {item}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function FlowList({
  items,
}: {
  items: readonly { title: string; body: string }[];
}) {
  return (
    <ol className="divide-y divide-border/70">
      {items.map((item, index) => (
        <li
          key={item.title}
          className="grid gap-4 py-8 first:pt-0 last:pb-0 sm:grid-cols-[4.5rem_1fr] sm:gap-8"
        >
          <span
            aria-hidden
            className="font-display text-5xl leading-none tabular-nums text-primary/25 sm:text-6xl"
          >
            {formatIndex(index)}
          </span>
          <div className="space-y-2 pt-1 sm:pt-2">
            <h3 className="font-display text-xl leading-snug sm:text-2xl">
              {item.title}
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function StepFlowList({
  steps,
}: {
  steps: readonly { title: string; description: string }[];
}) {
  return (
    <ol className="divide-y divide-border/70">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="grid gap-4 py-8 first:pt-0 last:pb-0 sm:grid-cols-[4.5rem_1fr] sm:gap-8"
        >
          <span
            aria-hidden
            className="font-display text-5xl leading-none tabular-nums text-primary/25 sm:text-6xl"
          >
            {formatIndex(index)}
          </span>
          <div className="space-y-2 pt-1 sm:pt-2">
            <h3 className="font-display text-xl leading-snug">{step.title}</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function HighlightBand({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description?: string;
}) {
  return (
    <section className="border-y border-primary/15 bg-muted/35 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-2">
          <p className="text-label text-primary">{label}</p>
          <p className="font-display text-3xl leading-snug sm:text-4xl">{value}</p>
          {description && (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export function ActionStrip({
  label,
  title,
  description,
  children,
  dark,
}: {
  label: string;
  title: string;
  description?: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      className={cn(
        "py-14 sm:py-16",
        dark
          ? "bg-hero text-white"
          : "border-y border-primary/15 bg-muted/35",
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="max-w-xl space-y-2">
          <p className="text-label text-primary">{label}</p>
          <p className="font-display text-2xl leading-snug sm:text-3xl">{title}</p>
          {description && (
            <p
              className={cn(
                "text-sm leading-relaxed",
                dark ? "text-white/70" : "text-muted-foreground",
              )}
            >
              {description}
            </p>
          )}
        </div>
        <div className="w-full shrink-0 sm:w-auto">{children}</div>
      </div>
    </section>
  );
}
