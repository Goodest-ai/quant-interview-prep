"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AuthButton } from "@/components/auth-button";

const sections = [
  {
    label: "Practice",
    links: [
      { href: "/", label: "Overview", number: "01" },
      { href: "/practice", label: "Question bank", number: "02" },
      { href: "/paths", label: "Learning paths", number: "03" },
      { href: "/market-making", label: "Market games", number: "04" },
    ],
  },
  {
    label: "Your workspace",
    links: [
      { href: "/profile", label: "Progress", number: "05" },
      { href: "/pricing", label: "Pricing", number: "06" },
    ],
  },
];

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2.5 text-foreground" aria-label="QuantPrep home">
      <span className="grid h-8 w-8 place-items-center rounded-md bg-accent font-display text-xl leading-none text-white" aria-hidden="true">Σ</span>
      <span className="font-display text-[1.65rem] leading-none tracking-[-0.055em]">QuantPrep</span>
    </Link>
  );
}

function Navigation({ pathname, onSelect }: { pathname: string; onSelect?: () => void }) {
  return (
    <nav aria-label="Main navigation" className="space-y-7">
      {sections.map((section) => (
        <div key={section.label}>
          <p className="mb-2 px-3 font-mono text-[10px] font-medium uppercase tracking-[0.13em] text-muted">
            {section.label}
          </p>
          <div className="space-y-1">
            {section.links.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onSelect}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm transition-colors",
                    active ? "bg-accent/10 font-semibold text-accent" : "text-foreground hover:bg-surface-2",
                  )}
                >
                  <span className={cn("font-mono text-[11px]", active ? "text-accent" : "text-muted")}>{link.number}</span>
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const isLogin = pathname === "/login";
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col border-r border-border bg-surface px-4 py-7 lg:flex">
        <div className="mb-14 px-2"><Brand /></div>
        {!isLogin && <Navigation pathname={pathname} />}
        <div className="mt-auto border-t border-border px-2 pt-5">
          {!isLogin && <AuthButton />}
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">Quant interview preparation</p>
        </div>
      </aside>
      <header className="sticky top-0 z-50 border-b border-border bg-surface lg:hidden">
        <div className="flex h-16 items-center justify-between px-5">
          <Brand />
          {!isLogin && (
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
              className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          )}
        </div>
        {!isLogin && menuOpen && (
          <div id="mobile-navigation" className="border-t border-border px-3 pb-5 pt-4">
            <Navigation pathname={pathname} onSelect={() => setMenuOpen(false)} />
            <div className="mt-5 border-t border-border px-3 pt-4"><AuthButton /></div>
          </div>
        )}
      </header>
    </>
  );
}
