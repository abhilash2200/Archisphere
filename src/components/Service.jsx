import React from 'react'
import { assets } from '../assets/assets';

const Service = () => {

    const services = [
        {
            img: assets.service1,
            title: 'Design Consultation',
            number: '01',
        },
        {
            img: assets.service2,
            title: 'Interior Planning',
            number: '02',
        },
        {
            img: assets.service3,
            title: 'Project Execution',
            number: '03',
        },
    ];





    return (
        <div className="container mx-auto px-4 py-16">
            <div className='relative mb-4'>
                <h2 className='text-[25px] font-normal tracking-[5px] uppercase text-[#D1BAA2] after:content[""] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-0.5 after:bg-[#495944]'>What we do</h2>
            </div>
            <h3 className='text-[#495944] text-4xl font-semibold uppercase mb-8 font-nunito'>Build for everyone, with everyone.</h3>
            <div className="flex flex-wrap justify-between gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="w-full md:w-[32%] lg:w-[32%] group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="relative">
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent p-6 backdrop-blur-sm transition-all duration-500 group-hover:bottom-0">
                                <div className="flex flex-wrap items-center justify-between">
                                    <h4 className="text-lg sm:text-xl font-semibold text-[#495944] capitalize">
                                        {service.title}
                                    </h4>
                                    <h3 className="text-4xl font-bold text-[#495944]/30">{service.number}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Service