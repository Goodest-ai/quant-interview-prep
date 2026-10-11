# QuantPrep

QuantPrep is a quant interview practice site built with Next.js, Tailwind CSS, Zustand, and optional Supabase authentication and storage.

## What is in the app

- A searchable question bank with filters, hints, worked solutions, numeric answer checking, timers, bookmarks, and solved status. The question content is loaded from Supabase; it is not included in this repository.
- Six interactive games: Card Trading, ETF Arbitrage, Probability Betting, Market of Cards, Arrow Game, and Tournament Market.
- A Study Field with six technique guides linked to practice topics.
- A progress page with activity, bookmarks, solved counts, and games played. Progress is stored locally, and can sync across devices when Supabase is configured.
- A warm, light interface with a left navigation rail on larger screens and a compact mobile menu.

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. Games and study guides work without configuration. To use the question bank and account sync, set the Supabase variables in `.env.example` and follow [DEPLOY.md](DEPLOY.md).

## Checks

```bash
npx tsc --noEmit
npm run build
npm run lint
```

The production build passes. The full lint check currently reports existing React hook issues in several game and practice components.
