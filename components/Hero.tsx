"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { banner } from "@/constants"
import BannerCarousel from "./BannerCarousel"

const Hero = () => {

    return (
        <section className="relative w-full overflow-hidden pt-14 md:pt-20">

            <div className="relative h-[650px] w-full">
                <img
                    src="hero.png"
                    alt="Business Conference"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div
                            className="max-w-3xl text-center md:text-start"
                        >
                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                                Your Business Success{" "}
                                <br />
                                is Our Mission
                            </h1>

                            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl">
                                When you work with us, you're not just getting AI technology you're getting a partner who's dedicated to your business success.
                            </p>

                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-start"
                            >
                                <Link href="/contact">
                                    <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 w-full sm:w-auto">
                                        Get Started Today
                                    </Button>
                                </Link>
                                <Link href="/portfolio">
                                    <Button variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto bg-white">
                                        View Our Work
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BannerCarousel />
        </section>
    )
}

export default Hero

//     < motion.div
// initial = {{ opacity: 0, y: 30 }}
// animate = {{ opacity: 1, y: 0 }}
// transition = {{ duration: 0.8 }}
// className = "max-w-3xl text-center md:text-start"
//     >
//                             <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
//                                 Your Business Success{" "}
//                                 <br />
//                                 is Our Mission
//                             </h1>

//                             <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl">
//                                 When you work with us, you're not just getting AI technology you're getting a partner who's dedicated to your business success.
//                             </p>

//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.8, delay: 0.2 }}
//                                 className="flex flex-col sm:flex-row gap-4 justify-start"
//                             >
//                                 <Link href="/contact">
//                                     <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 w-full sm:w-auto">
//                                         Get Started Today
//                                     </Button>
//                                 </Link>
//                                 <Link href="/portfolio">
//                                     <Button variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto bg-white">
//                                         View Our Work
//                                     </Button>
//                                 </Link>
//                             </motion.div>
//                         </motion.div >