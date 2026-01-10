import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { teamMembers } from '@/constants';
import { ArrowRight, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '@/utils/motion';
import { HeroButton, TeamSection } from './TeamSection';
const AboutUs = () => {

    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto lg:px-8">
                {/* Hero Section */}
                <div className="mb-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image Section */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[15/10]">
                                <img
                                    src="aboutus.png"
                                    alt="Modern office meeting room"
                                    className="w-full h-[400px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-6 py-2">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <Badge className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-1">
                                    Tech
                                </Badge>
                                <Badge className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1">
                                    AI
                                </Badge>
                                <Badge className="bg-red-400 hover:bg-red-500 text-white px-4 py-1">
                                    Automation
                                </Badge>
                                <Badge variant="outline" className="px-4 py-1">
                                    16 October 2023
                                </Badge>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                                About Megatha Tech
                            </h1>

                            <div className="space-y-4 text-slate-700 leading-relaxed">
                                <p>
                                    <span className="font-semibold text-slate-900">What is Lorem Ipsum?</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                                <p>
                                    <span className="font-semibold text-slate-900">What is Lorem Ipsum?</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>

                            <HeroButton/>
                        </div>
                    </div>
                </div>

                <TeamSection/>
            </div>
        </div>
    );
};

export default AboutUs;