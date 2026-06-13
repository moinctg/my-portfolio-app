"use client"

import { Globe, Link, Mail, ArrowUp } from "lucide-react"

const socialLinks = [
  { icon: Globe, href: "#", label: "GitHub" },
  { icon: Link, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
]

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-bold">
              <span className="text-primary">A</span>hmed
            </p>
            <p className="text-sm text-muted-foreground">
              Senior IT Administrator | Cloud & Security Specialist
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-2.5 rounded-full bg-secondary hover:bg-primary/20 border border-border transition-colors"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Ahmed. All rights reserved.
          </p>

          <a
            href="#"
            className="p-2 rounded-full bg-secondary hover:bg-primary/20 border border-border transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
