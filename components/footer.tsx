"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/newsletter-signup"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Trophy,
  Star,
  Users,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sidebar border-t border-sidebar-border mt-16">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Newsletter Section */}
        <div className="mb-12">
          <NewsletterSignup />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 gaming-gradient rounded-xl flex items-center justify-center neon-glow">
                  <span className="text-white font-bold text-xl gaming-title">K</span>
                </div>
                <div className="absolute -inset-1 gaming-gradient rounded-xl opacity-20 blur-sm"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-sidebar-foreground gaming-title">KOODOS</h3>
                <p className="text-gaming-cyan text-sm font-medium">Gaming Hub</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md gaming-body">
              India's premier gaming destination for news, reviews, and entertainment. Join millions of gamers
              discovering the latest in PC gaming, mobile gaming, and esports.
            </p>

            {/* Gaming Stats */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Star className="w-4 h-4 text-gaming-orange mr-1" />
                  <span className="text-sidebar-foreground font-semibold gaming-subtitle">2.5K+</span>
                </div>
                <p className="text-xs text-muted-foreground">Game Reviews</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Users className="w-4 h-4 text-gaming-cyan mr-1" />
                  <span className="text-sidebar-foreground font-semibold gaming-subtitle">50K+</span>
                </div>
                <p className="text-xs text-muted-foreground">Community</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <Trophy className="w-4 h-4 text-gaming-pink mr-1" />
                  <span className="text-sidebar-foreground font-semibold gaming-subtitle">100+</span>
                </div>
                <p className="text-xs text-muted-foreground">Awards</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                size="sm"
                variant="ghost"
                className="w-10 h-10 p-0 text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-xl transition-all duration-200"
                asChild
              >
                <a href="https://facebook.com/koodos" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="w-10 h-10 p-0 text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-xl transition-all duration-200"
                asChild
              >
                <a href="https://twitter.com/koodos" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="w-10 h-10 p-0 text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-xl transition-all duration-200"
                asChild
              >
                <a href="https://instagram.com/koodos" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="w-10 h-10 p-0 text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent rounded-xl transition-all duration-200"
                asChild
              >
                <a href="https://youtube.com/koodos" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Gaming Content</h4>
            <ul className="space-y-2">
              {[
                { label: "Latest Gaming News", href: "/" },
                { label: "Game Reviews & Ratings", href: "/reviews" },
                { label: "Gaming Guides & Tips", href: "/guides" },
                { label: "PC Gaming Hardware", href: "/pc-gaming" },
                { label: "Mobile Gaming", href: "/mobile" },
                { label: "Esports & Tournaments", href: "/esports" },
                { label: "Gaming Videos", href: "/videos" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Gaming Community</h4>
            <ul className="space-y-2">
              {[
                { label: "Gaming Discussions", href: "/discussions" },
                { label: "Indian Gaming Hub", href: "/community" },
                { label: "User Game Reviews", href: "/user-reviews" },
                { label: "Gaming Forums", href: "/forums" },
                { label: "Discord Gaming Server", href: "/discord", external: true },
                { label: "Reddit r/IndianGaming", href: "/reddit", external: true },
                { label: "Gaming Tournaments", href: "/tournaments" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                    {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">KOODOS</h4>
            <ul className="space-y-2">
              {[
                { label: "About KOODOS", href: "/about" },
                { label: "Contact Gaming Team", href: "/contact" },
                { label: "Join Our Team", href: "/careers" },
                { label: "Gaming Press Kit", href: "/press" },
                { label: "Gaming Partnerships", href: "/partnership" },
                { label: "Advertise with Gamers", href: "/advertise" },
                { label: "Gaming Awards", href: "/awards" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <div>
                <div>Editorial: editorial@koodos.in</div>
                <div>Gaming Tips: tips@koodos.in</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <div>
                <div>Gaming Support: +91-KOODOS-1</div>
                <div>Mon-Sat 10AM-8PM IST</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <div>
                <div>Gaming Hub, Cyber City</div>
                <div>Gurugram, Haryana, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 KOODOS Gaming Hub. All rights reserved. Made with ❤️ for Indian Gamers.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
