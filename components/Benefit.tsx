
import {  ArrowUpRight } from 'lucide-react'
import { benefits } from '@/constants';


const Benefit = () => {
    return (
        <div className="relative overflow-hidden max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">

            <div className="relative">
                <div className="text-center mb-18">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                        How We Deliver
                    </h2>
                    <p className="text-slate-500 text-lg font-medium italic">Our proven process ensures every project is handled with expertise and care.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                        <div
                            key={index}
                            className="group relative h-full transition-all duration-300"
                        >
                            <div className='relative h-full flex flex-col bg-white/70 backdrop-blur-xl border border-slate-200 rounded-[2.5rem] p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 overflow-hidden group-hover:border-primary'>

                                <div className='absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl from-blue-500/20 to-blue-400/20' />

                                <div className="relative mb-8">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-lg border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="text-primary" size={28}/>
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-black transition-colors">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-slate-500 text-[15px] leading-relaxed mb-5">
                                        {benefit.text}
                                    </p>
                                </div>

                            </div>
                        </div>
                    )})}
                </div>
            </div>


        </div>
    );
};

export default Benefit;