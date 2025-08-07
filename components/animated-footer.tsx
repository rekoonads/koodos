"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react"

const footerSections = [
  {
    title: "Content",
    links: [
      { label: "News", href: "/article/news" },
      { label: "Reviews", href: "/article/review" },
      { label: "Features", href: "/article/feature" },
      { label: "Guides", href: "/article/guide" },
      { label: "Videos", href: "/article/video" },
    ],
  },
  {
    title: "Gaming",
    links: [
      { label: "PC Gaming", href: "/pc" },
      { label: "PlayStation", href: "/ps5" },
      { label: "Xbox", href: "/xbox" },
      { label: "Nintendo Switch", href: "/nintendo-switch" },
      { label: "Mobile Gaming", href: "/mobile" },
    ],
  },
  {
    title: "Entertainment",
    links: [
      { label: "Anime & Manga", href: "/anime" },
      { label: "Comics", href: "/comics" },
      { label: "Science", href: "/science-1" },
      { label: "Tech", href: "/tech" },
      { label: "Cosplay", href: "/cosplay" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Follow Us", href: "/follow" },
      { label: "Forums", href: "/more/community" },
      { label: "Podcasts", href: "/more/podcasts" },
      { label: "Store", href: "/more/store" },
      { label: "Deals", href: "/more/deals" },
    ],
  },
]

const socialLinks = [
  { icon: Facebook, href: "/follow/facebook", label: "Facebook" },
  { icon: Twitter, href: "/follow/twitter", label: "Twitter" },
  { icon: Instagram, href: "/follow/instagram", label: "Instagram" },
  { icon: Youtube, href: "/follow/youtube", label: "YouTube" },
]

export default function AnimatedFooter() {
  return (
    <footer className="bg-black border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-10 h-10 bg-white rounded flex items-center justify-center"
              >
                <span className="text-black font-bold text-lg">K</span>
              </motion.div>
              <div>
                <span className="text-white font-bold text-xl group-hover:text-gray-300 transition-colors">KOODOS</span>
                <p className="text-gray-400 text-sm">Interactive Entertainment</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Your ultimate destination for gaming news, reviews, and entertainment content. Discover the latest in
              gaming culture and technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@koodos.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+17067190001</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div>
                  <div>1908 Thomes Ave STE 12472</div>
                  <div>Cheyenne, WY 82001</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 mb-8"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>© 2024 KOODOS Interactive Entertainment. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>in India</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
