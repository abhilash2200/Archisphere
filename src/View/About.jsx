import React from 'react';
import Layout from '../components/Layout.Jsx';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-[#495944] text-white py-20 text-center px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4">About Archisphere</h1>
          <p className="text-lg max-w-2xl mx-auto text-[#e5e5e5]">
            Designing spaces that speak to the soul — blending function, form, and future.
          </p>
        </div>
      </section>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-1/2 md:w-1/2">
            <img src={assets.aboutus} alt="" />
          </div>
          <div className="w-full lg:w-1/2 md:w-1/2 px-4">
            <div className="relative mb-8">
              <h2 className='text-[25px] font-normal tracking-[5px] uppercase text-[#D1BAA2] after:content[""] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-0.5 after:bg-[#495944]'>
                About Us
              </h2>
            </div>
            <h3 className="text-[#495944] text-4xl font-semibold uppercase mb-16 font-nunito">
              Break out of your routine with a global perspective.
            </h3>
            <p className="mb-4 font-poppins text-[18px] text-[#505050]">
              Based on collective work and shared knowledge, Architecture-Studio
              aims to favour dialogue and debate, to transform individual
              knowledge into increased creative potential.
            </p>
            <p className="mb-4 font-poppins text-[18px] text-[#505050]">
              Our Studio is a architecture practice based in Prague, Chech and
              Venice. Today, it includes 150 architects, urban planners,
              landscape and interior designers of 25 different nationalities.
              The company principle of Architecture-Studio is the collective
              conception. From the very beginning, the practice has believed in
              the virtues of exchange, crossing ideas, common effort, shred
              knowledge.
            </p>
            <div className="flex justify-start mt-8">
              <button
                className="bg-[#495944] text-white font-roboto tracking-wide capitalize px-8 py-3 rounded-md hover:bg-white hover:text-[#495944] hover:border hover:border-[#495944] transition-colors duration-300 hover:cursor-pointer"
                onClick={() => (window.location.href = "/About")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-[#F5F5F5] relative overflow-hidden">
        <div className="container mx-auto text-center max-w-3xl animate-fade-in-up">
          <h3 className="text-4xl md:text-5xl font-extrabold text-[#2D3E2F] uppercase tracking-wider mb-6 relative inline-block">
            <span className="relative z-10">Our Mission</span>
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#A3B18A] z-0 rounded-full"></span>
          </h3>
          <p className="text-[#4A4A4A] text-lg md:text-xl leading-relaxed">
            To create <span className="font-semibold text-[#6B705C]">meaningful environments</span> that inspire,
            endure, and improve lives. Whether it’s a residence, a commercial space, or an urban landmark —
            we design with <span className="font-semibold text-[#6B705C]">intention and impact</span>.
          </p>
        </div>
      </section>


      {/* Team Highlight */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h3 className="text-3xl font-bold text-[#495944] uppercase mb-6">Our People</h3>
          <p className="text-[#555] mb-8">
            Our strength lies in our people. Architects, planners, and creatives — all united by a shared passion for design.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-[#495944] text-xl font-semibold mb-2">Elena Kovac</h4>
              <p className="text-[#666]">Design Lead - Prague</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-[#495944] text-xl font-semibold mb-2">Rahul Mehra</h4>
              <p className="text-[#666]">Urban Planner - Mumbai</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-[#495944] text-xl font-semibold mb-2">Giulia Rossi</h4>
              <p className="text-[#666]">Sustainability Specialist - Venice</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;