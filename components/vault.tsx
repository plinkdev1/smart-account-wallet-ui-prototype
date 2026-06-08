"use client"
import { Button } from "@/components/ui/button"
import { ChainSlider } from "@/components/chain-slider"
import { BalanceCard } from "@/components/balance-card"
import { TransactionList } from "@/components/transaction-list"
import { HamburgerMenu } from "@/components/hamburger-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { Bell, Settings, ArrowUpRight, ArrowDownLeft, Repeat, Search, Filter } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Vault() {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="min-h-screen pb-24">
      <header className="px-6 pt-12 pb-8 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">ORŸA</h1>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <HamburgerMenu />
          <button className="p-2.5 rounded-full hover:bg-secondary/50 transition-smooth">
            <Bell className="w-5 h-5 text-muted-foreground" />
          </button>
          <Link href="/settings">
            <button className="p-2.5 rounded-full hover:bg-secondary/50 transition-smooth">
              <Settings className="w-5 h-5 text-muted-foreground" />
            </button>
          </Link>
        </div>
      </header>

      <div className="px-6 mb-10">
        <p className="text-sm text-muted-foreground mb-3 font-medium">Total Balance</p>
        <h2 className="text-4xl font-bold mb-3 tracking-tight">$124,856.42</h2>
        <p className="text-sm text-chart-1 font-medium">
          +$2,341.28 <span className="text-muted-foreground">(+1.91%)</span>
        </p>
      </div>

      <div className="px-6 mb-10">
        <div className="grid grid-cols-3 gap-3">
          <Button className="flex flex-col items-center gap-2.5 h-auto py-5 bg-primary hover:bg-primary/90 hover:scale-105 text-primary-foreground rounded-3xl transition-all duration-300 border-0 shadow-sm hover:shadow-lg">
            <ArrowUpRight className="w-5 h-5" />
            <span className="text-sm font-semibold">Send</span>
          </Button>
          <Button className="flex flex-col items-center gap-2.5 h-auto py-5 bg-white hover:bg-secondary hover:scale-105 text-foreground rounded-3xl border border-border/50 transition-all duration-300 shadow-sm hover:shadow-lg">
            <ArrowDownLeft className="w-5 h-5" />
            <span className="text-sm font-semibold">Receive</span>
          </Button>
          <Button className="flex flex-col items-center gap-2.5 h-auto py-5 bg-white hover:bg-secondary hover:scale-105 text-foreground rounded-3xl border border-border/50 transition-all duration-300 shadow-sm hover:shadow-lg">
            <Repeat className="w-5 h-5" />
            <span className="text-sm font-semibold">Swap</span>
          </Button>
        </div>
      </div>

      <div className="px-6 mb-3">
        <ChainSlider />
      </div>

      <div className="px-6 mb-8 flex justify-end">
        <Link href="/chains" className="text-xs text-muted-foreground hover:text-primary transition-smooth font-medium">
          View All Chains
        </Link>
      </div>

      <div className="px-6 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search assets..."
              className="w-full h-11 pl-10 pr-4 rounded-2xl border border-border/50 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth text-sm"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="h-11 px-4 rounded-2xl border border-border/50 bg-white hover:bg-secondary transition-smooth flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter</span>
          </button>
        </div>

        {showFilters && (
          <div className="mt-3 p-4 rounded-2xl border border-border/50 bg-white shadow-lg animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="space-y-3">
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary transition-smooth text-sm">
                All Assets
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary transition-smooth text-sm">
                Favorites
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary transition-smooth text-sm">
                Layer 1
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary transition-smooth text-sm">
                Layer 2
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="px-6 mb-8">
        <h3 className="text-base font-semibold mb-4 text-muted-foreground">Assets</h3>
        <div className="space-y-2">
          <BalanceCard
            name="Ethereum"
            symbol="ETH"
            balance="12.4582"
            value="$45,234.12"
            change="+2.4%"
            positive={true}
            color="#627EEA"
          />
          <BalanceCard
            name="Solana"
            symbol="SOL"
            balance="234.56"
            value="$32,145.89"
            change="+5.2%"
            positive={true}
            color="#14F195"
          />
          <BalanceCard
            name="SUI"
            symbol="SUI"
            balance="1,245.00"
            value="$18,234.00"
            change="-1.2%"
            positive={false}
            color="#4DA2FF"
          />
          <BalanceCard
            name="USD Coin"
            symbol="USDC"
            balance="29,242.41"
            value="$29,242.41"
            change="0.0%"
            positive={true}
            color="#2775CA"
          />
        </div>
      </div>

      <div className="px-6 pb-6">
        <h3 className="text-base font-semibold mb-4 text-muted-foreground">Recent Activity</h3>
        <TransactionList />
      </div>
    </div>
  )
}
