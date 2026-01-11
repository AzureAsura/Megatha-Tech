import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Megatha Tech</h3>
            <p className="text-sm opacity-90 mb-6">Transforming businesses through innovative digital solutions.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-75 transition-opacity" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-75 transition-opacity" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/company-profile" className="hover:opacity-75">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:opacity-75">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:opacity-75">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:opacity-75">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-75">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:opacity-75">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:hello@megatha.tech" className="hover:opacity-75">
                  hello@megatha.tech
                </a>
              </li>
              <li className="flex gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:opacity-75">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Tech Valley, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm opacity-75">&copy; 2026 Megatha Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
