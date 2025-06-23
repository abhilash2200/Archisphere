import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import { assets } from '../assets/assets';

const Projects = () => {

    const projects = [
        {
            img: assets.project1,
            title: 'Poolscape Villa',
            description: 'A luxurious villa nestled in a coastal setting, Poolscape Villa celebrates modern living with a seamless blend of architecture and nature. Designed with sweeping open plans, infinity-edge pools, and panoramic glass walls, it offers an immersive experience into sea views and sunset horizons.',
            year: 2024,
        },
        {
            img: assets.project2,
            title: 'European Lard Station',
            description: 'A remarkable public infrastructure project, the European Lard Station integrates classical European design with high-functioning urban mobility. Featuring a 750-seat hemicycle, advanced office complexes, commission chambers, and expansive public walkways, the space reflects modern governance and design harmony.',
            year: 2023,
        },
        {
            img: assets.project3,
            title: 'Poolscape Villa',
            description: 'Located atop a sea-kissed cliff, this villa redefines luxury with fluid interiors, ambient lighting, and eco-sensitive materials. Every room opens to nature, and its spatial rhythm harmonizes indoor tranquility with the vibrancy of its coastal surroundings.',
            year: 2022,
        },
        {
            img: assets.project4,
            title: 'European Lard Station',
            description: 'Serving as a dynamic civic node, this station brings together government function, public accessibility, and architectural presence. The design is focused on transparency, spatial hierarchy, and user-centered movement — a true example of democratic architecture in action.',
            year: 2021,
        },
        {
            img: assets.project5,
            title: 'Poolscape Villa',
            description: 'This residential marvel combines minimalism with modern comfort. The Poolscape Villa 2020 edition showcases smart lighting, passive cooling design, and integrated water features. A meditative retreat made for the modern soul.',
            year: 2020,
        },
        {
            img: assets.project6,
            title: 'European Lard Station',
            description: 'An early iteration of the station, this phase established the project’s foundation with sustainability, scalability, and civic dignity. Its modular forms and clean urban lines set the tone for future expansions with purpose and poise.',
            year: 2019,
        },
    ];


    return (
        <div className="container mx-auto px-4 py-12">
            <div className="relative mb-4">
                <h2 className='text-[25px] font-normal tracking-[5px] uppercase text-[#D1BAA2] relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-0.5 after:bg-[#495944]'>
                    Last Projects
                </h2>
            </div>
            <h3 className='text-[#495944] text-4xl font-semibold uppercase mb-12 font-nunito'>
                Made with passion.
            </h3>
            <Splide
                aria-label="Project Showcase"
                options={{
                    type: "loop",
                    perPage: 1,
                    autoplay: false,
                    interval: 4000,
                    gap: 20,
                    pauseOnHover: true,
                    arrows: true,
                    pagination: true,
                    speed: 800,
                }}
            >
                {
                    projects.map((project, index) => (
                        <SplideSlide key={index} className="flex flex-wrap justify-around items-center gap-y-6">
                            {/* Image Section */}
                            <div className="w-full md:w-[60%] lg:w-[60%] overflow-hidden rounded-xl">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="w-full md:w-[40%] lg:w-[30%] relative">
                                <div className="bg-transparent p-6 rounded-xl transition-all duration-500 ">
                                    <div className="flex flex-row items-center mb-2 -ml-[80px]">
                                        <div className="w-[180px] h-0.5 bg-[#495944] mr-3"></div>
                                        <p className="text-sm font-medium text-[#7A7A7A]">
                                            <span className="text-[#495944] text-2xl font-semibold">{project.year}</span>
                                        </p>
                                    </div>

                                    <h4 className="text-xl font-bold text-[#495944] capitalize mb-2">
                                        {project.title}
                                    </h4>
                                    <p className="text-sm text-[#505050] mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                </div>
                            </div>
                        </SplideSlide>
                    ))
                }
            </Splide>
        </div>
    );
};

export default Projects;
