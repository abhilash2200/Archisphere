import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import { assets } from '../assets/assets';
import { SlActionRedo } from "react-icons/sl";
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Projects = () => {
  const projects = [
    {
      img: assets.project1,
      title: 'Poolscape Villa',
      description: 'A luxurious villa nestled in a coastal setting, Poolscape Villa celebrates modern living with a seamless blend of architecture and nature.',
      year: 2024,
      link: '/project/poolscape-villa-2024',
    },
    {
      img: assets.project2,
      title: 'European Lard Station',
      description: 'This station integrates classical European design with urban mobility. With a 750-seat hemicycle, it reflects governance and design harmony.',
      year: 2023,
      link: '/project/european-lard-station-2023',
    },
    {
      img: assets.project3,
      title: 'Yabroudi Villa',
      description: 'A sea-cliff villa using ambient lighting and eco-materials to blend modern luxury with natural surroundings.',
      year: 2022,
      link: '/project/yabroudi-villa-2022',
    },
    {
      img: assets.project4,
      title: 'Cultural Complex Centre',
      description: 'A civic landmark focused on transparency and spatial hierarchy, embodying democratic design.',
      year: 2021,
      link: '/project/cultural-complex-centre-2021',
    },
    {
      img: assets.project5,
      title: 'Dalbourne Villa',
      description: 'Minimalist yet luxurious, this 2020 villa edition features smart lighting and tranquil spaces.',
      year: 2020,
      link: '/project/dalbourne-villa-2020',
    },
    {
      img: assets.project6,
      title: 'Amman Rotana Hotel',
      description: 'A vertical hospitality marvel designed with modular forms and glass transparency in Amman.',
      year: 2019,
      link: '/project/amman-rotana-hotel-2019',
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 mt-20">
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

                    <Link
                      to={project.link}
                      className="group text-sm text-[#495944] font-medium capitalize inline-flex items-center gap-2 hover:text-[#D1BAA2] transition-all duration-200"
                    >
                      Read more
                      <SlActionRedo className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            ))
          }
        </Splide>
      </div>

      {/* New Section 1 - Awards */}
      <div className="bg-[#F5F5F5] py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-sm tracking-[0.2em] text-[#D1BAA2] uppercase mb-3 font-medium">Recognition</h2>
          <h3 className="text-[#495944] text-4xl md:text-5xl font-bold uppercase mb-6">Awards & Accolades</h3>
          <p className="text-[#505050] max-w-2xl mx-auto mb-12 text-base md:text-lg">
            Our projects have earned prestigious international awards recognizing innovation, sustainability, and architectural brilliance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition duration-300 ease-in-out">
              <div className="flex items-center mb-4">
                <span className="text-[#D1BAA2] text-3xl mr-4">🏙️</span>
                <h4 className="text-xl font-semibold text-[#495944]">Best Urban Project 2023</h4>
              </div>
              <p className="text-sm text-[#666]">Awarded by Global Architecture Forum for the Cultural Complex Centre.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition duration-300 ease-in-out">
              <div className="flex items-center mb-4">
                <span className="text-[#D1BAA2] text-3xl mr-4">🌿</span>
                <h4 className="text-xl font-semibold text-[#495944]">Green Building Award</h4>
              </div>
              <p className="text-sm text-[#666]">Recognized for eco-conscious design in Dalbourne Villa.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition duration-300 ease-in-out">
              <div className="flex items-center mb-4">
                <span className="text-[#D1BAA2] text-3xl mr-4">🏨</span>
                <h4 className="text-xl font-semibold text-[#495944]">Hospitality Design Winner</h4>
              </div>
              <p className="text-sm text-[#666]">Amman Rotana Hotel selected for its innovative hospitality architecture.</p>
            </div>
          </div>
        </div>
      </div>


      {/* New Section 2 - Call To Action */}
      <div className="bg-[#495944] py-24 px-6 text-white text-center relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <h3 className="text-4xl md:text-5xl font-extrabold uppercase mb-6 tracking-wide">
            Ready to Transform Your Space?
          </h3>
          <p className="max-w-2xl mx-auto mb-10 text-lg md:text-xl text-[#E6E6E6]">
            Partner with <span className="text-[#D1BAA2] font-semibold">Archisphere</span> to bring bold architectural visions to life — from luxurious residences to meaningful public spaces.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#495944] px-10 py-3 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-[#D1BAA2] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Optional soft background glow or pattern */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/cta-pattern.svg')] opacity-5 bg-center bg-cover"></div>
      </div>
      

    </Layout>
  );
};

export default Projects;
