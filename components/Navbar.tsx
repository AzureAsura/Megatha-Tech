"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { services } from "@/constants"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [showServicesDropdown, setShowServicesDropdown] = useState(false)

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-border">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <Link href="/" className="font-bold text-2xl text-black">
                        Megatha
                    </Link>


                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                            About
                        </Link>


                        <div
                            className="relative group"
                            onMouseEnter={() => setShowServicesDropdown(true)}
                            onMouseLeave={() => setShowServicesDropdown(false)}
                        >
                            <button className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                                Services
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {showServicesDropdown && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg py-2"
                                >
                                    {services.map((service) => (
                                        <Link
                                            key={service.slug}
                                            href={`/services/${service.slug}`}
                                            className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors">
                            Portfolio
                        </Link>

                        <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                            Blog
                        </Link>

                        <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                            Contact
                        </Link>
                    </div>


                    <div className="hidden md:block">
                        <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
                    </div>


                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>


                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden pb-4"
                    >
                        <div className="flex flex-col gap-4">
                            <Link href="/about" className="text-foreground hover:text-primary">
                                About
                            </Link>
                            <button
                                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                                className="flex items-center gap-2 text-foreground hover:text-primary"
                            >
                                Services
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {showServicesDropdown && (
                                <div className="ml-4 flex flex-col gap-2">
                                    {services.map((service) => (
                                        <Link
                                            key={service.slug}
                                            href={`/services/${service.slug}`}
                                            className="text-sm text-foreground hover:text-primary"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            )}

                            <Link href="/portfolio" className="text-foreground hover:text-primary">
                                Portfolio
                            </Link>
                            <Link href="/blog" className="text-foreground hover:text-primary">
                                Blog
                            </Link>
                            <Link href="/contact" className="text-foreground hover:text-primary">
                                Contact
                            </Link>

                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}


