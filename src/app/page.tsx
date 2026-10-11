import Link from "next/link";
import { BrainCircuit, LineChart, Route, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconCard } from "@/components/icon-card";

export default function DashboardPage() {
  return (
    <div className="space-y-11">
      <section className="border-b border-border pb-12 pt-3 sm:pt-8">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">Quant interview preparation / 01</p>
        <h1 className="mt-7 max-w-5xl font-display text-[3.25rem] leading-[0.99] tracking-[-0.055em] sm:text-[4.75rem] xl:text-[5.8rem]">
          Prepare for the questions.<br />
          Practice the <em className="font-normal text-accent">decisions.</em>
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          Build your probability and expected value skills with interview problems, structured paths, and games that make you think under pressure.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/paths">
            <Button size="lg">Start a path <ArrowRight className="h-4 w-4" /></Button>
          </Link>
          <Link href="/practice">
            <Button size="lg" variant="outline">Explore questions</Button>
          </Link>
        </div>
      </section>

      <section aria-labelledby="practice-heading">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">The workspace / 02</p>
            <h2 id="practice-heading" className="mt-2 font-display text-[2.2rem] leading-tight tracking-[-0.04em] sm:text-[2.8rem]">Choose how to practice</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted">Learn a method, work through a problem, then test your judgment in a game.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <IconCard
            href="/practice"
            icon={BrainCircuit}
            title="Question bank"
            kicker="Problems and solutions"
            description="Find questions by topic, company, or difficulty. Work through hints before opening the solution."
            watermark="01 / QUESTIONS"
          />
          <IconCard
            href="/paths"
            icon={Route}
            title="Learning paths"
            kicker="Trader and researcher"
            description="Follow lessons, interview questions, coding tasks, and projects in a guided sequence."
            watermark="02 / LEARN"
          />
          <IconCard
            href="/market-making"
            icon={LineChart}
            title="Market games"
            kicker="Six interactive games"
            description="Quote markets, assess odds, and spot mispricings against the clock."
            watermark="03 / PLAY"
          />
        </div>
      </section>
    </div>
  );
}
