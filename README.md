# QuantPrep

QuantPrep is a quant interview preparation site built with Next.js, Tailwind CSS, Zustand, and optional Supabase storage.

## What is in the app

- A searchable question bank with filters, hints, worked solutions, answer checking, timers, bookmarks, and solved status. Question content is loaded from Supabase and is not included in this repository.
- Quant Trader and Quant Researcher paths with lessons, interview questions, coding tasks, projects, and capstones. Python tasks run in the browser through Pyodide.
- Six interactive games: Card Trading, ETF Arbitrage, Probability Betting, Market of Cards, Arrow Game, and Tournament Market.
- A progress page with activity, bookmarks, solved counts, and games played. Progress is stored locally and can sync across devices when Supabase is configured.
- A warm, light interface with a left navigation rail on larger screens and a compact mobile menu.
- Optional QuantPrep Pro subscriptions. Paid content stays unlocked until Razorpay is configured.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Games and learning paths work without billing configuration. To use the question bank, account sync, and subscriptions, set the variables in `.env.example`, apply `supabase/schema.sql`, and follow [DEPLOY.md](DEPLOY.md).

## Paths curriculum

The curriculum source is in `quantpath/`. After editing it, regenerate the site's data:

```bash
npm run paths:setup
npm run paths:build
npm run paths:check
npm run paths:check-web
```

## Checks

```bash
npx tsc --noEmit
npm run build
npm run lint
```
