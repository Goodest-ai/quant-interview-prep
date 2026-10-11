import Link from "next/link";
import { ArrowUpRight, Lock, type LucideIcon } from "lucide-react";

// Kept for existing game metadata; the library uses one consistent accent.
export type CardColor = "accent" | "emerald" | "amber" | "rose" | "pink" | "indigo" | "sky";

export function IconCard({
  href,
  title,
  kicker,
  description,
  icon: Icon,
  watermark,
  locked = false,
}: {
  href: string;
  title: string;
  kicker?: string;
  description?: string;
  icon: LucideIcon;
  color?: CardColor;
  watermark?: string;
  locked?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="flex h-24 items-start justify-between border-b border-border bg-surface-2 px-6 py-5">
        <span className="grid h-11 w-11 place-items-center rounded-lg border border-accent/20 bg-surface text-accent">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        {watermark && <span className="font-mono text-xs tracking-[0.12em] text-muted">{watermark}</span>}
      </div>
      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        {kicker && <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent">{kicker}</p>}
        <h3 className="mt-2 font-display text-[1.55rem] leading-tight tracking-[-0.03em]">{title}</h3>
        {description && <p className="mt-3 flex-1 text-sm leading-6 text-muted">{description}</p>}
        <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-medium text-foreground group-hover:text-accent">
          {locked ? <>Pro <Lock className="h-4 w-4" /></> : <>Explore <ArrowUpRight className="h-4 w-4" /></>}
        </span>
      </div>
    </Link>
  );
}
