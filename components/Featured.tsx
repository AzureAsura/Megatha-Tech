'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from './ui/button'
import { PortfolioCard } from './PortofolioCard'
import { featured } from '@/constants'

const Featured = () => {
    return (
        <section className = "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-card/30" >
                <div
                    className="flex items-center justify-between mb-12 flex-col sm:flex-row gap-4"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Featured Work</h2>
                        <p className="text-lg text-muted-foreground">Check out our latest projects and case studies.</p>
                    </div>
                    <Link href="/portfolio">
                        <Button variant="outline">View All</Button>
                    </Link>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {featured.map((project, i) => (
                        <motion.div key={i} >
                            <PortfolioCard title={project.title} category={project.category} image={project.image} />
                        </motion.div>
                    ))}
                </div>
      </section >
  )
}

export default Featured