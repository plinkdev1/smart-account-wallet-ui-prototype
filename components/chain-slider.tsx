"use client"

import { useRef } from "react"

const chains = [
  { name: "Ethereum", logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg" },
  { name: "Solana", logo: "https://cryptologos.cc/logos/solana-sol-logo.svg" },
  { name: "SUI", logo: "https://cryptologos.cc/logos/sui-sui-logo.svg" },
  { name: "Aptos", logo: "https://cryptologos.cc/logos/aptos-apt-logo.svg" },
  { name: "Polygon", logo: "https://cryptologos.cc/logos/polygon-matic-logo.svg" },
  { name: "Arbitrum", logo: "https://cryptologos.cc/logos/arbitrum-arb-logo.svg" },
  { name: "Optimism", logo: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.svg" },
  { name: "Base", logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg" },
]

export function ChainSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative">
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
        {chains.map((chain, index) => (
          <button
            key={index}
            className="flex-shrink-0 flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-secondary transition-smooth group"
          >
            <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-smooth">
              <img src={chain.logo || "/placeholder.svg"} alt={chain.name} className="w-8 h-8" />
            </div>
            <span className="text-xs font-medium text-muted-foreground">{chain.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
