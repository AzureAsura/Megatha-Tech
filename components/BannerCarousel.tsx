"use client"
import { motion } from "framer-motion"
import { banner } from "@/constants"

const doubledBanner = [...banner, ...banner, ...banner]

export default function BannerCarousel() {
  return (
    <div className="bg-white py-10 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-14 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,     
            repeat: Infinity,
          }}
        >
          {doubledBanner.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 shrink-0"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg" />
              <div>
                <div className="font-semibold text-gray-900">
                  {item.name}
                </div>
                <div className="text-sm text-gray-500 flex items-center gap-1">
                  <span>{item.flag}</span> {item.country}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}