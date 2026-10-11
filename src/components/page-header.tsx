import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/** Consistent page header used across every section and game window. */
export function PageHeader({
  kicker,
  title,
  description,
  backHref,
  backLabel = "Back",
}: {
  kicker?: string;
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <div className="space-y-4 border-b border-border pb-7">
      {backHref && (
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> {backLabel}
        </Link>
      )}
      <div className="space-y-2">
        {/* A quiet eyebrow rather than an accent pill: every page led with a
            accent badge, which spent the accent before the primary action. */}
        {kicker && (
          <span className="block font-mono text-2xs font-medium uppercase tracking-[0.12em] text-accent">
            {kicker}
          </span>
        )}
        {/* Sentence case: uppercase is reserved for eyebrow-sized labels and
            the one display moment on the dashboard, so headings read as
            hierarchy instead of shouting alongside everything else. */}
        <h1 className="font-display text-[2.4rem] leading-[1.08] tracking-[-0.045em] sm:text-[3.25rem]">
          {title}
        </h1>
        {description && <p className="max-w-2xl text-[0.98rem] leading-7 text-muted">{description}</p>}
      </div>
    </div>
  );
}
