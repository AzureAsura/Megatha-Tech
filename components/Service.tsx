
import {  serviceSection } from '../constants';

const Service = () => {
    return (
        <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

                <div
                    className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-200 hover:border-primary transition-all hover:shadow-2xl duration-300"
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 pb-8 border-b border-slate-300">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                            Jasa Pembuatan Website
                        </h3>
                        <p className="text-slate-500 text-sm md:text-right max-w-sm">
                            Kami siap membantu menciptakan suatu website untuk Anda. Silakan pilih layanan yang Anda inginkan.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-4">
                        {serviceSection.map((service, index) => {
                            const Icon = service.icon
                            return(
                                <div
                                    key={service.id}
                                    className="flex flex-col items-center group cursor-pointer"
                                >
                                    <div className="w-20 h-20  rounded-full border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-4 shadow-sm">
                                        <Icon size={28} />
                                    </div>

                                    <span className="text-center font-bold text-slate-800 group-hover:text-primary transition-colors text-sm md:text-base">
                                        {service.title}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
        </section>
    );
};

export default Service;