"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Shield,
  Smartphone,
  Key,
  FileCheck,
  Bell,
  Globe,
  ChevronRight,
  CheckCircle2,
  ArrowLeft,
  Wallet,
  FileKey,
  LinkIcon,
  Lock,
  Clock,
  DollarSign,
  Languages,
  Palette,
  BarChart3,
  Bug,
  Share2,
  Network,
  Code,
  Download,
  HelpCircle,
  MessageSquare,
  AlertCircle,
  FileText,
  Scale,
  Info,
  LogOut,
  User,
  Mail,
  Award,
} from "lucide-react"
import { HamburgerMenu } from "@/components/hamburger-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { useTheme } from "@/contexts/theme-context"

export default function SettingsPage() {
  const [biometricsEnabled, setBiometricsEnabled] = useState(true)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false)
  const [crashReportsEnabled, setCrashReportsEnabled] = useState(true)
  const [developerMode, setDeveloperMode] = useState(false)
  const [showLogoutDialog, setShowLogoutDialog] = useState(false)

  const { theme } = useTheme()

  return (
    <div className="min-h-screen px-6 pt-8 pb-24">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-muted-foreground font-serif">Security & preferences</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <HamburgerMenu />
        </div>
      </header>

      {/* Profile Section */}
      <Card className="card-3d p-6 mb-6 border-0 shadow-xl bg-gradient-to-br from-primary/5 to-white dark:from-primary/10 dark:to-card">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-chart-1 flex items-center justify-center text-white text-2xl font-bold">
            JD
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Mail className="w-3 h-3" />
              john.doe@orya.com
            </p>
            <p className="text-sm font-medium text-primary flex items-center gap-1 mt-1">
              <Award className="w-4 h-4" />
              Circle Tier: Gold
            </p>
          </div>
        </div>
        <Button variant="outline" className="w-full bg-transparent">
          <User className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </Card>

      {/* Security Status */}
      <Card className="card-3d p-6 mb-6 border-0 shadow-xl bg-gradient-to-br from-chart-1/10 to-white dark:to-card">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-chart-1/20 flex items-center justify-center">
            <Shield className="w-6 h-6 text-chart-1" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Security Status</h3>
            <p className="text-sm text-muted-foreground">Your account is secure</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-chart-1" />
          <span className="text-sm font-medium">All security features enabled</span>
        </div>
      </Card>

      {/* Account Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Account</h3>
        <div className="space-y-2">
          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Wallets</p>
                  <p className="text-xs text-muted-foreground">Multi-wallet management</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileKey className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Recovery Phrase</p>
                  <p className="text-xs text-muted-foreground">View & backup seed phrase</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <LinkIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Connected Apps</p>
                  <p className="text-xs text-muted-foreground">WalletConnect sessions</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>
        </div>
      </div>

      {/* Security Settings */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Security</h3>
        <div className="space-y-2">
          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Biometric Authentication</p>
                  <p className="text-xs text-muted-foreground">Face ID / Touch ID</p>
                </div>
              </div>
              <button
                onClick={() => setBiometricsEnabled(!biometricsEnabled)}
                className={`w-12 h-7 rounded-full transition-all duration-300 ${
                  biometricsEnabled ? "bg-primary" : "bg-border"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                    biometricsEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Key className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Change PIN</p>
                  <p className="text-xs text-muted-foreground">Update your security PIN</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Trusted Devices</p>
                  <p className="text-xs text-muted-foreground">Manage device access</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">KYC Verification</p>
                  <p className="text-xs text-chart-1 font-medium">Verified ✓</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Auto-Lock</p>
                  <p className="text-xs text-muted-foreground">5 minutes</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Transaction Limits</p>
                  <p className="text-xs text-muted-foreground">Set spending limits</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>
        </div>
      </div>

      {/* Preferences */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Preferences</h3>
        <div className="space-y-2">
          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Currency</p>
                  <p className="text-xs text-muted-foreground">USD</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Languages className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Language</p>
                  <p className="text-xs text-muted-foreground">English</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Palette className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Theme</p>
                  <p className="text-xs text-muted-foreground capitalize">{theme === "system" ? "Light" : "Dark"}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Notifications</p>
                  <p className="text-xs text-muted-foreground">Transaction alerts</p>
                </div>
              </div>
              <button
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                className={`w-12 h-7 rounded-full transition-all duration-300 ${
                  notificationsEnabled ? "bg-primary" : "bg-border"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                    notificationsEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Currency</p>
                  <p className="text-xs text-muted-foreground">USD</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>
        </div>
      </div>

      {/* Privacy */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Privacy</h3>
        <div className="space-y-2">
          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Analytics</p>
                  <p className="text-xs text-muted-foreground">Usage data collection</p>
                </div>
              </div>
              <button
                onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                className={`w-12 h-7 rounded-full transition-all duration-300 ${
                  analyticsEnabled ? "bg-primary" : "bg-border"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                    analyticsEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bug className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Crash Reports</p>
                  <p className="text-xs text-muted-foreground">Help improve ORŸA</p>
                </div>
              </div>
              <button
                onClick={() => setCrashReportsEnabled(!crashReportsEnabled)}
                className={`w-12 h-7 rounded-full transition-all duration-300 ${
                  crashReportsEnabled ? "bg-primary" : "bg-border"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                    crashReportsEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Share2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Data Sharing</p>
                  <p className="text-xs text-muted-foreground">Never</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>
        </div>
      </div>

      {/* Advanced */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Advanced</h3>
        <div className="space-y-2">
          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Network className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Network</p>
                  <p className="text-xs text-muted-foreground">RPC settings</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Developer Mode</p>
                  <p className="text-xs text-muted-foreground">Advanced features</p>
                </div>
              </div>
              <button
                onClick={() => setDeveloperMode(!developerMode)}
                className={`w-12 h-7 rounded-full transition-all duration-300 ${
                  developerMode ? "bg-primary" : "bg-border"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${
                    developerMode ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Download className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Export Data</p>
                  <p className="text-xs text-muted-foreground">Download as JSON</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>
        </div>
      </div>

      {/* Support */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Support</h3>
        <div className="space-y-2">
          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Help Center</p>
                  <p className="text-xs text-muted-foreground">FAQs & guides</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Contact Support</p>
                  <p className="text-xs text-muted-foreground">Get help from our team</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Submit Feedback</p>
                  <p className="text-xs text-muted-foreground">Share your thoughts</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Bug Report</p>
                  <p className="text-xs text-muted-foreground">Report an issue</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>
        </div>
      </div>

      {/* Legal */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Legal</h3>
        <div className="space-y-2">
          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Terms of Service</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Privacy Policy</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-sm hover:shadow-md transition-smooth cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Licenses</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
          </Card>
        </div>
      </div>

      {/* About */}
      <Card className="card-3d p-6 mb-6 border-0 shadow-xl bg-gradient-to-br from-white to-secondary dark:from-card dark:to-secondary/20">
        <h3 className="text-lg font-semibold mb-4">About</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <Info className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Version</span>
            </div>
            <span className="text-sm text-muted-foreground">1.0.0 (build 123)</span>
          </div>
          <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-secondary/50 transition-smooth text-sm font-medium flex items-center justify-between">
            <span>Check for Updates</span>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </Card>

      <Button
        variant="outline"
        className="w-full mt-6 h-12 text-destructive hover:bg-destructive/10 bg-transparent"
        onClick={() => setShowLogoutDialog(true)}
      >
        <LogOut className="w-4 h-4 mr-2" />
        Sign Out
      </Button>

      {/* Logout Confirmation Dialog */}
      {showLogoutDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
          <Card className="w-full max-w-sm p-6 border-0 shadow-2xl">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                <LogOut className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sign Out?</h3>
              <p className="text-sm text-muted-foreground">Are you sure you want to sign out of your ORŸA account?</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowLogoutDialog(false)}>
                Cancel
              </Button>
              <Button
                variant="destructive"
                className="flex-1"
                onClick={() => {
                  // Handle logout logic here
                  console.log("[v0] User logged out")
                  setShowLogoutDialog(false)
                }}
              >
                Sign Out
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
