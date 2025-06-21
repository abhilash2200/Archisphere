import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '../assets/assets';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const items = containerRef.current.querySelectorAll('.project-item');

        items.forEach((item) => {
            const image = item.querySelector('.project-img');
            const text = item.querySelector('.project-text');

            gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                    end: 'bottom 60%',
                    toggleActions: 'play none none none',
                }
            })
                .from(image, {
                    opacity: 0,
                    x: -100,
                    duration: 0.8,
                    ease: 'power2.out',
                })
                .from(text, {
                    opacity: 0,
                    x: 100,
                    duration: 0.8,
                    ease: 'power2.out',
                }, "-=0.6");
        });
    }, []);


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
        <section className="py-16">
            <div className="container mx-auto px-4" ref={containerRef}>
                <div className="relative mb-4">
                    <h2 className='text-[25px] font-normal tracking-[5px] uppercase text-[#D1BAA2] relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-0.5 after:bg-[#495944]'>
                        Last Projects
                    </h2>
                </div>
                <h3 className='text-[#495944] text-4xl font-semibold uppercase mb-12 font-nunito'>
                    Made with passion.
                </h3>

                <div className="flex flex-col gap-24">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-item w-full flex flex-wrap justify-between items-center overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="w-full md:w-[60%] lg:w-[70%] project-img">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-auto object-cover transition-transform duration-500"
                                />
                            </div>
                            <div className="w-full md:w-[40%] lg:w-[30%] project-text">
                                <div className="bg-gradient-to-t from-white/95 via-white/80 to-transparent p-6 backdrop-blur-sm transition-all duration-500">
                                    <h4 className="text-lg sm:text-xl font-semibold text-[#495944] capitalize">
                                        {project.title}
                                    </h4>
                                    <p className="text-sm text-[#505050]">{project.description}</p>
                                    <p className="text-sm text-[#505050]">{project.year}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
