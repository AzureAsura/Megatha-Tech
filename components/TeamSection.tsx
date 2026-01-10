'use client'

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { teamMembers } from '@/constants';
import { staggerContainer, scaleIn } from '@/utils/motion';
import { ArrowRight } from 'lucide-react';

export const TeamSection = () => {
    return (

        <motion.div
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8 mt-6"
        >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-50">
                            <CardContent className="px-8">
                                <div className="flex items-center gap-6">
                                    {/* Avatar */}
                                    <motion.div
                                        transition={{ duration: 0.5 }}
                                        className="relative"
                                    >
                                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-blue-100 shadow-lg">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white"
                                        />
                                    </motion.div>

                                    {/* Info */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-4">
                                            {member.role}
                                        </p>

                                        {/* Social Icons */}
                                        <div className="flex gap-3">
                                            {member.social.map((social, idx) => (
                                                <motion.a
                                                    key={idx}
                                                    href={social.href}
                                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 text-slate-600 hover:bg-primary hover:text-white transition-colors duration-300 shadow-sm"
                                                    aria-label={social.label}
                                                >
                                                    <social.icon className="w-5 h-5" />
                                                </motion.a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export const HeroButton = () => (
    <motion.a
        whileHover={{  x: 5 }}
        className="flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors group"
    >
        Learn More
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </motion.a>
)