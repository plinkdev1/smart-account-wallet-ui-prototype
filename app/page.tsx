"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Vault } from "@/components/vault"
import { CrossChainLink } from "@/components/link"
import { Circle } from "@/components/circle"
import { Care } from "@/components/care"
import { Suite } from "@/components/suite"
import { Navigation } from "@/components/navigation"

export default function Home() {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get("tab")

  const [activeTab, setActiveTab] = useState<"vault" | "link" | "circle" | "care" | "suite">("vault")

  useEffect(() => {
    if (tabParam && ["vault", "link", "circle", "care", "suite"].includes(tabParam)) {
      setActiveTab(tabParam as "vault" | "link" | "circle" | "care" | "suite")
    }
  }, [tabParam])

  return (
    <main className="min-h-screen bg-background pb-20">
      {activeTab === "vault" && <Vault />}
      {activeTab === "link" && <CrossChainLink />}
      {activeTab === "circle" && <Circle />}
      {activeTab === "care" && <Care />}
      {activeTab === "suite" && <Suite />}

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </main>
  )
}
