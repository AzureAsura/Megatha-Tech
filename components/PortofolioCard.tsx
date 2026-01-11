"use client"
import { motion } from "framer-motion"
import Image from "next/image"

interface PortfolioCardProps {
  title: string
  category: string
  image: string
}

export function PortfolioCard({ title, category, image }: PortfolioCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-xl"
    >
      <div className="relative w-full aspect-video bg-muted overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
          <p className="text-white/80 text-sm">{category}</p>
        </div>
      </div>
    </motion.div>
  )
}
