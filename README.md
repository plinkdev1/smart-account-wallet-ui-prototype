# ORYA Wallet — Premium Multi-Chain Wallet

![Next.js](https://img.shields.io/badge/Next.js-16-000000) ![React](https://img.shields.io/badge/React-19-61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-38BDF8) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Radix-111827) ![status](https://img.shields.io/badge/status-prototype-orange)

> A premium multi-chain digital wallet, reimagined as a financial product rather than a dev tool — twelve purpose-named modules spanning everyday balances to institutional tooling, wrapped in a polished, fully themeable design system.

<p align="center"><img src="screenshots/01.png" width="760"/></p>

## What This Is

ORYA Wallet is the **experience layer** of the ORYA platform: a design-complete, fully navigable front-end prototype. Every screen, component, transition, and chart is built and explorable on mock data, so the entire product can be experienced end to end with no backend. Its job is to make the product vision, information architecture, and design system tangible.

> **Where is the engine room?** The production architecture — 30+ microservices, on-chain MPC (IKA 2PC-MPC on Sui), account abstraction across four providers, and omnichain support (EVM, Sui, Solana, Bitcoin) — lives in a separate repository. This repo is the front end that sits on top of that platform; here it runs on mock data so it stands alone.

## Screens

<p align="center">
  <img src="screenshots/03.png" width="240"/>
  <img src="screenshots/05.png" width="240"/>
  <img src="screenshots/07.png" width="240"/>
</p>
<p align="center">
  <img src="screenshots/09.png" width="240"/>
  <img src="screenshots/11.png" width="240"/>
  <img src="screenshots/13.png" width="240"/>
</p>

## Information Architecture

Most wallets bury everything under Home / Send / Receive / Settings. ORYA instead organizes the product into **twelve purpose-named modules**, each a distinct space with a clear job:

| Module | Role | Notable UI |
|---|---|---|
| **Vault** | Home base — total balance, portfolio breakdown, quick actions | balance card, portfolio summary |
| **Link** | Connect, pair, and manage external wallets and accounts | connection manager |
| **Flow** | Money in motion — transaction history, transfers, activity | transaction list |
| **Insights** | Analytics, performance, and market data, visualized | Recharts charts |
| **Chains** | Visual multi-chain switcher for moving across networks | chain slider |
| **Atrium** | Wealth management, including a dedicated estate view (`/atrium/estate`) | wealth dashboard |
| **Nexus** | Network status and core configuration | status panels |
| **Curio** | Research and education content | content cards |
| **Grove** | Community and social layer | social feed |
| **Suite** | Institutional and advanced features | pro tooling |
| **Care** | In-product support and help | help center |
| **Settings** | Preferences, security, and personalization | settings groups |

The naming is a deliberate product decision: make a complex multi-chain wallet feel calm, premium, and navigable rather than technical.

## Design & Front-End Engineering

- **Framework:** Next.js 16 (App Router), React 19, full TypeScript.
- **Design system:** shadcn/ui on Radix primitives (30+ components — dialogs, popovers, menus, tabs, sliders, toasts, tooltips), styled with Tailwind CSS v4 and tailwindcss-animate.
- **Theming:** first-class light/dark via next-themes with a token-driven palette and a theme toggle.
- **Navigation:** custom responsive system — persistent sidebar on desktop, hamburger drawer on mobile.
- **Data visualization:** portfolio and market charts via Recharts.
- **Forms & input:** react-hook-form with Zod validation, plus polished primitives (OTP input, Embla carousels, cmdk command palette, Sonner toasts, Vaul drawers).
- **Architecture:** route-per-module under `app/`, with shared `components/`, `contexts/`, `hooks/`, and `lib/` — a structure that mirrors the product IA.
- **Responsive:** mobile-first, verified across breakpoints.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript · React 19 |
| Styling | Tailwind CSS v4 · tailwindcss-animate |
| Components | shadcn/ui · Radix UI |
| Charts | Recharts |
| Forms | react-hook-form · Zod |
| Theming | next-themes |
| Icons | lucide-react |
| UX primitives | cmdk · Sonner · Vaul · Embla · input-otp |

## Project Structure
app/         vault (/) · flow · insights · chains · atrium · atrium/estate · nexus · curio · grove · settings
components/  balance-card · transaction-list · chain-slider · navigation · hamburger-menu · vault · link · care · suite · theme-toggle
components/ui/   shadcn/ui + Radix primitives
contexts/    app-wide state (wallet, theme)
hooks/       reusable React hooks
lib/         utilities and mock data
styles/      Tailwind v4 + design tokens

## Run It

```bash
pnpm install        # or: npm install --legacy-peer-deps
pnpm dev            # or: npm run dev
```

Open http://localhost:3000 — it loads straight into Vault on mock data; no login or backend required.

## Status & Roadmap

**Status:** Front-end prototype on mock data. Not connected to live chains; not audited.

**What it proves today:** product thinking (information architecture, module decomposition, naming), a coherent premium design system, and modern front-end engineering.

**Toward production:** connect the modules to the ORYA platform services (portfolio, transactions, DeFi, fiat, oracles), wire real multi-chain providers and account abstraction, and layer in MPC zero-trust auth from the platform architecture.

## Disclaimer

Prototype shared as a portfolio artifact. Not financial software; do not use with real funds.
