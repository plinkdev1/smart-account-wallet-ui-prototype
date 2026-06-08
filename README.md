# ORYA Wallet — Premium Multi-Chain Wallet (Prototype)

![Next.js](https://img.shields.io/badge/Next.js-16-000000) ![React](https://img.shields.io/badge/React-19-61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-38BDF8) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Radix-111827) ![status](https://img.shields.io/badge/status-prototype-orange)

> A premium, multi-chain digital wallet — a fully navigable product prototype spanning twelve modules, from portfolio and transfers to multi-chain management, analytics, wealth, and institutional tooling.

<p align="center"><img src="screenshots/01.png" width="760"/></p>

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

## Overview

ORYA Wallet is the product prototype for a premium multi-chain wallet. It presents the full user experience — navigation, layouts, components, theming, and data visualizations — across the product''s twelve modules, running on mock data so the entire flow is explorable end to end.

## Modules

| Module | Purpose |
|---|---|
| Vault | Portfolio overview, balances, and wallet management |
| Link | Connect and manage external wallets |
| Flow | Transaction history and transfers |
| Insights | Analytics and market data |
| Chains | Multi-chain selector and network management |
| Atrium | Wealth management and estate view |
| Nexus | Network status and core settings |
| Curio | Research and education |
| Grove | Community and social |
| Suite | Institutional features |
| Care | Support and help |
| Settings | Preferences and security |

## Design & Engineering Highlights

- Twelve-module product surface unified by a custom navigation system (persistent sidebar on desktop, hamburger drawer on mobile).
- Multi-chain selector (chain slider) for switching networks at a glance.
- Light and dark themes via next-themes.
- Built on Next.js 16 App Router with React 19 and TypeScript.
- UI composed from shadcn/ui and Radix primitives, styled with Tailwind CSS v4.
- Data visualizations with Recharts; forms with react-hook-form and Zod.
- Fully responsive across desktop and mobile breakpoints.

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

## Run It

```bash
pnpm install        # or: npm install --legacy-peer-deps
pnpm dev            # or: npm run dev
```

Then open http://localhost:3000.

## Status

This is a front-end prototype using mock data, built to demonstrate the product''s UX, interaction design, and visual system. It is not connected to live blockchains and is not audited. The full microservices architecture behind the production vision — 30+ services, on-chain MPC (IKA 2PC-MPC on Sui), account abstraction, and omnichain support — is maintained in a separate repository.
